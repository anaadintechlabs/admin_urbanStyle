import { Component, OnInit } from '@angular/core';
import { ReturnsService } from '../service/returns.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-returns-dashboard',
  templateUrl: './returns-dashboard.component.html',
  styleUrls: ['./returns-dashboard.component.css']
})
export class ReturnsDashboardComponent implements OnInit {
  public returnsList: any[];
  request = {
    "limit": 15,
    "offset": 0,
    "sortingDirection": "desc",
    "sortingField": "createdDate"
  };

  constructor(private returnsService: ReturnsService,
    private router: Router) { }

  ngOnInit() {
    this.getReturnsList();
  }

  getReturnsList() {
    let url = 'api/getReturnForSuperAdmin';
    this.returnsService.getReturnForSuperAdmin(url, this.request).subscribe(
      data => {
        this.returnsList = data.data.returnList;
        console.log(this.returnsList);
      }, error => {
        console.log(error);
      }
    )
  }

  navigateToReturnProfile(id) {
    // alert(id);
    this.router.navigateByUrl('/returns/returnprofile/'+ id);
  }

}
