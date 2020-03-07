import { Component, OnInit } from '@angular/core';
import { DataService } from "_service/data/data.service";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
  userList= [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllUserByType("CUSTOMER").subscribe(
      data => {
        this.userList = data;
      },
      error => {
        console.log("somewting went wring");
      }
    );
  }
}
