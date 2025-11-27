import { Injectable } from '@angular/core';
import { Service } from '../../models/services.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BserviceService {
  
  private baseUrl = 'http://localhost:8000/api/v1';
  
  constructor(private http: HttpClient) { }

  listServices(business_id:number):Observable<Service[]> {
    return this.http.get<Service[]>(`${this.baseUrl}/services/?business_id=${business_id}`);
  }

  storeService(serviceData:Service):Observable<Service>{
    return this.http.post<Service>(`${this.baseUrl}/services`, serviceData);
  }

  showServiceById(service_id:number):Observable<Service>{
    return this.http.get<Service>(`${this.baseUrl}/services/${service_id}`);
  }

  updateServiceById(service_id:number, serviceData:Service):Observable<Service>{
    return this.http.put<Service>(`${this.baseUrl}/services/${service_id}`, serviceData);
  }

  deleteServiceById(service_id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/services/${service_id}`);
  }


}
