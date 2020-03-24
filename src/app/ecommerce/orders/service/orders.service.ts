import { Injectable } from '@angular/core';
import { ApiService } from '_service/http_&_login/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private apiService: ApiService) { }

  getAllOrderForSuperAdmin(path, request): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.post(path, request).subscribe(data => {
        obs.next(data);
      })
    });
  }

  getOrderById(path, param): Observable<any> {
    return new Observable<any> (obs => {
      this.apiService.get(path, param).subscribe(data => {
        obs.next(data);
      })
    });
  }

  setStatusbyAdmin(path, params): Observable<any> {
    return new Observable<any> (obs => {
      this.apiService.get(path, params).subscribe(data => {
        obs.next(data);
      })
    });
  }
}
