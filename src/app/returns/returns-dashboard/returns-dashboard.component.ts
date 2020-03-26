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
  public limit=15;
  public offset=0;
  public sortingField="createdDate";
  public sortingDirection="desc";
  public count;

  public request = {
    "limit":this.limit,
    "offset":this.offset,
    "sortingDirection":this.sortingDirection,
    "sortingField":this.sortingField
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
        this.count = data.data.count;
        console.log(this.count);
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

  pageChanged(event){
    console.log("page changes"+event)
    this.request.offset=event-1;
    this.offset=event;
    this.getReturnsList();
  }

}
