import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
@Component({
  templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {

  public productList: any[];
  public status: number = 1;
  public limit=15;
  public offset=0;
  public sortingField="createdDate";
  public sortingDirection="desc";

  public request = {
    "limit":this.limit,
    "offset":this.offset,
    "sortingDirection":this.sortingDirection,
    "sortingField":this.sortingField
  };


  public count;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.getAllProducts(this.status);
  }

  getAllProducts(status) {
    this.status = status;
    let url = 'product/getAllVariantsByStatusWithPagination';
    console.log(this.request)
    this.productService.getAllVariantsByStatus(url, this.request,{status: status}).subscribe(
      data => {
        this.productList = data.data.productVariantList;
        this.count=data.data.count;
        console.log(this.productList);
        console.log("count is",this.count);
      }, error => {
        console.log(error);
      }
    )
  }

  changeStatus(id: number, status: number) {
    let url = 'product/changeStatusOfProductVariantForSuperAdmin';
    this.productService.
      changeStatusOfProductVariantForSuperAdmin(url, this.request, {productId: id, status: status})
      .subscribe(
        data => {
          this.getAllProducts(this.status);
        }, error => {
          console.log(error);
        }
      )
  }

  setFeaturedProduct(id: number, featured: string) {
    let url = 'product/setFeaturedProduct';
    this.productService
      .setFeaturedProduct(url, {prodId: id, featured: featured}).subscribe(
        data => {
          this.getAllProducts(this.status);
        }, error => {
          console.log(error);
        }
      )
  }

  setDealOfTheDay(id: number, deal: string) {
    let url = 'product/setDealOftheDay';
    this.productService
      .setFeaturedProduct(url, {prodId: id, deal: deal}).subscribe(
        data => {
          this.getAllProducts(this.status);
        }, error => {
          console.log(error);
        }
      )
  }

  pageChanged(event){
    console.log("page changes"+event)
    this.request.offset=event-1;
    this.offset=event;
    this.getAllProducts(this.status);
  }


}
