import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
@Component({
  templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {

  public productList: any[];
  public status: number = 1;
  public request = {
    "limit":15,
    "offset":0,
    "sortingDirection":"desc",
    "sortingField":"createdDate"
  }


  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.getAllProducts(this.status);
  }

  getAllProducts(status) {
    this.status = status;
    let url = 'product/getAllVariantsByStatus';
    this.productService.getAllVariantsByStatus(url, {status: status}).subscribe(
      data => {
        this.productList = data.data.productVariantList;
        console.log(this.productList);
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


}
