import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../service/affiliate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affiliate-dashboard',
  templateUrl: './affiliate-dashboard.component.html',
  styleUrls: ['./affiliate-dashboard.component.css']
})
export class AffiliateDashboardComponent implements OnInit {
  public affiliateList: any[];
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


  constructor(private affiliateService: AffiliateService, private router: Router) { }

  ngOnInit() {
    this.getAffiliateList();
  }

  getAffiliateList() {
    let url = 'api/user/getAllUserByUserType';
    this.affiliateService.getAllUserByUserType(url, this.request, {userType : 'AFFILIATE'}).subscribe(
      data => {
        this.affiliateList = data.data.userList;
        this.count = data.data.count;
        console.log(this.count);
        console.log(this.affiliateList);
      }, error => {
        console.log(error);
      }
    )
  }

  pageChanged(event){
    console.log("page changes"+event)
    this.request.offset=event-1;
    this.offset=event;
    this.getAffiliateList();
  }

}
