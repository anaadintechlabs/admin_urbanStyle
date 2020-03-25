import { Component, OnInit } from '@angular/core';
import { OrdersService } from './service/orders.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'orders.component.html'
})
export class OrderComponent implements OnInit {
  public ordersList: any[];
  public request = {
    limit: 15,
    offset: 0,
    sortingDirection: 'desc',
    sortingField: 'createdDate'
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
        console.log(this.ordersList);
      }, error => {
        console.log(error);
      }
    )
  }

  navigateToOrderProfile(id) {
    this.router.navigateByUrl('/ecom/orderprofile/'+ id);
  }


}
