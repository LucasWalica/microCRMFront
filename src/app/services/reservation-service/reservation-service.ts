import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../../models/reservation.model';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8000/api/v1';
  
  constructor(private http:HttpClient){}

  reservationList(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${this.baseUrl}/reservations/`)
  }

  storeReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/reservations`, reservation);
  }


  // owner updates state
  updateReservationState(id:number, reservation:Reservation):Observable<Reservation>{
    return this.http.put<Reservation>(`${this.baseUrl}/reservations/${id}`, {
      status: reservation.status
    });
  }


  // only owner can delete reservation
  deleteReservation(reservation_id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/reservations/${reservation_id}`)
  }

  cancelReservationByOwner(reservation_id:number):Observable<Reservation>{
    return this.http.put<Reservation>(`${this.baseUrl}/reservations/${reservation_id}/owner-cancel`, {});
  }

  updatePublicReservation(token: string, status: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/reservations/update/${token}`, { status });
  }

  storePublicReservation(data: {
      client_email?: string;
      client_phone?: string;
      client_name?: string;
      fk_business_service: number;
      time_start: string;
    }): Observable<any> {
      return this.http.post(`${this.baseUrl}/reservation-public`, data);
    }



}
