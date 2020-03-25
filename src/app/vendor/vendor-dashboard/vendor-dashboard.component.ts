import { Component, OnInit } from '@angular/core';
import { VendorService } from '../service/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {
  public vendorsList: any[];
  public limit=15;
  public offset=0;
  public sortingField="joinDate";
  public sortingDirection="desc";
  public count;

  public request = {
    "limit":this.limit,
    "offset":this.offset,
    "sortingDirection":this.sortingDirection,
    "sortingField":this.sortingField
  };


  constructor(
    private vendorService: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
   this.getVendorList();

  }

  getVendorList() {
    let url = 'api/user/getAllUserByUserType';
    this.vendorService.getAllUserByUserType(url, this.request, {userType : 'VENDOR'}).subscribe(
      data => {
        this.vendorsList = data.data.userList;
        this.count = data.data.count;
        console.log(this.count);
        console.log(this.vendorsList);
      }, error => {
        console.log(error);
      }
    )
  }

  navigateToVendorProfile(id) {
    this.router.navigateByUrl('/vendor/vendorprofile/'+ id);
  }

  pageChanged(event){
    console.log("page changes"+event)
    this.request.offset=event-1;
    this.offset=event;
    this.getVendorList();
  }

}
