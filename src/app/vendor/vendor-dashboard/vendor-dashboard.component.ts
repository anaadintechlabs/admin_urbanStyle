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
  public request = {
    limit: 15,
    offset: 0,
    sortingDirection: 'desc',
    sortingField: 'joinDate'
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
        console.log(this.vendorsList);
      }, error => {
        console.log(error);
      }
    )
  }

  navigateToVendorProfile(id) {
    this.router.navigateByUrl('/vendor/vendorprofile/'+ id);
  }

}
