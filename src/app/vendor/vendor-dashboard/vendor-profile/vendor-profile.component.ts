import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../service/vendor.service';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {
  public vendorId: number;
  public subscription: any;
  public vendorData: any;
  public vendorAddList: any[];
  public vendorOrderList: any[];
  public vendorProductList: any[];
  public request = {
    limit: 15,
    offset: 0,
    sortingDirection: 'desc',
    sortingField: 'createdDate'
  };
  // const param: HttpParams = new HttpParams().set("bankId", bankId);
  constructor(private route: ActivatedRoute, private vendorService: VendorService) { }

  ngOnInit() {
    this.subscription = this.route.url.subscribe(
      res => {
        this.vendorId = +this.route.snapshot.params.id;
        // this.vendorId = Number(this.vendorId);
        console.log(this.vendorId);

        console.log(this.request);

        let url = 'api/getDetailofVendor';
        this.vendorService.getDetailOfVendor(url, this.request, {vendorId: this.vendorId}).subscribe(
          res => {
            this.vendorData = res.data;
            this.vendorAddList = res.data.vendorAddress;
            this.vendorOrderList = res.data.vendorOrders;
            this.vendorProductList = res.data.vendorProducts;
            console.log(this.vendorData);
          }, error => {
            console.log(error);
          }
        )
      }, error => {
        console.log(error);
      }
    )
  }

}
