import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  params ={};

  constructor(private route: ActivatedRoute,
     private orderService: OrdersService,
     private router: Router) { }

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
            this.params = {
              orderId: Number(this.orderData.id),
              orderProdId: this.orderData.product.product.productId,
              status: this.orderData.status,
              userId: this.orderData.userOrder.user.id
            }
          }, error => {
            console.log(error);
          }
        )
      }
    );
  }

  closeOrder() {
    let url = 'api/setStatusbyAdmin';
    this.params = {
      orderId: Number(this.orderData.userOrder.id),
      orderProdId: this.orderData.id,
      status: 'COMPLETE',
      userId: this.orderData.userOrder.user.id
    }
    this.orderService.setStatusbyAdmin(url, this.params).subscribe(
      data => {
        this.router.navigateByUrl('/ecom/orders');
      }, error => {
        console.log(error);
      }
    )
  }

}
