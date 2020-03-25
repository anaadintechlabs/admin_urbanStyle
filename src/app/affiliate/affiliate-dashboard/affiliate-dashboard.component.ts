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
  public request = {
    limit: 15,
    offset: 0,
    sortingDirection: 'desc',
    sortingField: 'joinDate'
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
        console.log(this.affiliateList);
      }, error => {
        console.log(error);
      }
    )
  }

}
