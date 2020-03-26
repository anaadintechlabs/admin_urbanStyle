import { Component, OnInit } from '@angular/core';
import { DataService } from "_service/data/data.service";
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
  public userList: any[];
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
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserList();
  }


  getUserList() {
    let url = 'api/user/getAllUserByUserType';
    this.userService.getAllUserByUserType(url, this.request, {userType : 'CUSTOMER'}).subscribe(
      data => {
        this.userList = data.data.userList;
        this.count = data.data.count;
        console.log(this.count);
        console.log(this.userList);
      }, error => {
        console.log(error);
      }
    )
  }


  navigateToUserProfile(id) {
    this.router.navigateByUrl('/user/userprofile/'+ id);
  }

  pageChanged(event){
    console.log("page changes"+event)
    this.request.offset=event-1;
    this.offset=event;
    this.getUserList();
  }
}
