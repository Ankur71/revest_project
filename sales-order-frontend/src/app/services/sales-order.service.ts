import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SalesOrderService {
    private apiUrl = 'http://localhost:5000/api/sales-orders';

    constructor(private http: HttpClient) {}

  getSalesOrders(filters: any): Observable<any[]> {
    let params = new HttpParams();
    for (let key in filters) {
        if (filters[key] && filters[key].trim() !== '') { 
          params = params.set(key, filters[key]);
        }
      }

    return this.http.get<any[]>(this.apiUrl, { params });
  }
}