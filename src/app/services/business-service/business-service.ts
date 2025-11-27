import { Injectable } from '@angular/core';
import { Business } from '../../models/business.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {
 private baseUrl = 'http://localhost:8000/api/v1';
  
  constructor(private http: HttpClient) { }
  
  getOwnBusnesses():Observable<Business[]> {
    return this.http.get<Business[]>(`${this.baseUrl}/businesses/`);
  }

  storeBusiness(businessData:Business):Observable<Business>{
    return this.http.post<Business>(`${this.baseUrl}/businesses/`, businessData);
  }

  showBusinessById(id:number):Observable<Business>{
    return this.http.get<Business>(`${this.baseUrl}/businesses/${id}`);
  }

  updateBusiness(id:number, businessData:Business):Observable<Business>{
    return this.http.put<Business>(`${this.baseUrl}/businesses/${id}`, businessData)
  }
  deleteBusiness(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/businesses/${id}`);
  }
}
