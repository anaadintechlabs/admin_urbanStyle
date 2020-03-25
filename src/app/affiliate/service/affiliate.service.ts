import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '_service/http_&_login/api.service';

@Injectable({
  providedIn: 'root'
})
export class AffiliateService {

  constructor(private apiService: ApiService) { }

  getAllUserByUserType(path, request, param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.postUser(path, request, param).subscribe(data => {
        obs.next(data);
      });
    });
  }
  
}
