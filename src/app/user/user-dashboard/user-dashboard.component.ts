import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  public userList: any[];
  public request = {
    limit: 15,
    offset: 0,
    sortingDirection: 'desc',
    sortingField: 'joinDate'
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
        console.log(this.userList);
      }, error => {
        console.log(error);
      }
    )
  }


  navigateToUserProfile(id) {
    this.router.navigateByUrl('/user/userprofile/'+ id);
  }

}
