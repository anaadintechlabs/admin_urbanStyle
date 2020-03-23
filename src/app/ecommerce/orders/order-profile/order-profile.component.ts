import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-order-profile',
  templateUrl: './order-profile.component.html',
  styleUrls: ['./order-profile.component.css']
})
export class OrderProfileComponent implements OnInit {
  public orderId: any;
  public subscription: any;
  public orderData: any;

  constructor(private route: ActivatedRoute, private orderService: OrdersService) { }

  ngOnInit() {
    this.subscription = this.route.url.subscribe(
      params => {
        this.orderId = this.route.snapshot.params.id;
        console.log(this.orderId);
        let url = 'api/getOrderById';
        this.orderService.getOrderById(url, {userOrderId: this.orderId}).subscribe(
          res => {
            this.orderData = res.data.orderDetails;
            console.log(this.orderData);
          }, error => {
            console.log(error);
          }
        )
      }
    );
  }

}
