import { Injectable } from '@angular/core';
import { ApiService } from '_service/http_&_login/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReturnsService {

  constructor(private apiService: ApiService) { }

  getReturnForSuperAdmin(path, request): Observable<any> {
    return new Observable<any> (obs => {
      this.apiService.post(path, request).subscribe(data => {
        obs.next(data);
      });
    })
  }

  getAllDetailOfReturn(path, param): Observable<any> {
    return new Observable<any> (obs => {
      this.apiService.get(path, param).subscribe(data => {
        obs.next(data);
      });
    })
  }

  setReturnStatusbyAdmin(path,request, params): Observable<any> {
    return new Observable<any> (obs => {
      this.apiService.post(path, request, params).subscribe(data => {
        obs.next(data);
      })
    });
  }


}
