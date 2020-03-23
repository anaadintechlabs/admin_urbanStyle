import { Injectable } from '@angular/core';
import { ApiService } from '_service/http_&_login/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private apiService: ApiService) { }

  getTop5Users(path, param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.get(path, param).subscribe(data => {
        obs.next(data);
      })
    });
  }

  getLastReturns(path, param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.get(path, param).subscribe(
        data=> {
          obs.next(data);
        }
      )
    })
  }

  getLastOrders(path, param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.get(path, param).subscribe(
        data=> {
          obs.next(data);
        }
      )
    });
  }

  getAllOrderByStatus(path, param): Observable<any> {
    return new Observable<any>(obs => {
      this.apiService.get(path, param).subscribe(
        data=> {
          obs.next(data);
        }
      )
    });
  }
  
}
