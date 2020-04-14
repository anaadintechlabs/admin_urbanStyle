import { Injectable } from '@angular/core';
import { ApiService } from '_service/http_&_login/api.service';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getAllUserByUserType(path, request, param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.postUser(path, request, param).subscribe(data => {
        obs.next(data);
      });
    });
  }

  getAllCartAndWishlist(path, request, param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.postOrder(path, request, param).subscribe(data => {
        obs.next(data);
      });
    });
  }

  getWalletDetailsOfUser(filter)
  {
 let currunt_user = JSON.parse(this.getUser());
    const route ='api/getWalletByUser?userId='+currunt_user.id;
    return new Observable<any>(obs =>{
      this.apiService.postOrder(route,filter).subscribe(data=>{
        obs.next(data);
      })
    })

  }

   getUser(): string {
    return window.localStorage['user'];
  }

}
