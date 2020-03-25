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
      this.apiService.post(path, request, param).subscribe(data => {
        obs.next(data);
      });
    });
  }

}
