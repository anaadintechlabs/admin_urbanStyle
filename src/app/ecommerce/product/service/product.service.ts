import { Injectable } from '@angular/core';
import { ApiService } from '_service/http_&_login/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }

  getAllVariantsByStatus(path, body,param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.post(path,body, param).subscribe(data => {
        obs.next(data);
      }); 
    })
  }

  changeStatusOfProductVariantForSuperAdmin(path, body, param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.post(path, body, param).subscribe(data => {
        obs.next(data);
      }); 
    })
  }

  setFeaturedProduct(path, param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.get(path, param).subscribe(data => {
        obs.next(data);
      }); 
    })
  } 


  setDealOftheDay(path, param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.get(path, param).subscribe(data => {
        obs.next(data);
      }); 
    })
  } 

}

