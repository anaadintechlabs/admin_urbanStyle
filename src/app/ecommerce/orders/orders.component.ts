import { Component, OnInit } from '@angular/core';
import { OrdersService } from './service/orders.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'orders.component.html'
})
export class OrderComponent implements OnInit {
  public ordersList: any[];
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


  constructor(private ordersService: OrdersService,
     private router: Router) {}

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    let url = 'api/getAllOrderForSuperAdmin';
    this.ordersService.getAllOrderForSuperAdmin(url, this.request).subscribe(
      data => {
        this.ordersList = data.data.orderList;
        this.count = data.data.count;
        console.log(this.count);
        console.log(this.ordersList);
      }, error => {
        console.log(error);
      }
    )
  }

  navigateToOrderProfile(id) {
    this.router.navigateByUrl('/ecom/orderprofile/'+ id);
  }

  pageChanged(event){
    console.log("page changes"+event)
    this.request.offset=event-1;
    this.offset=event;
    this.getOrderList();
  }
}
