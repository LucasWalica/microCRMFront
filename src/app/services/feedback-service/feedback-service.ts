import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BusinessFeedback } from '../../models/feedback.models';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseUrl = 'http://localhost:8000/api/v1';

  constructor(private http:HttpClient){}

  // returns feedbacks from the businesses of the owner 
  // or your posted feedbacks as a user
  getFeedbacks(): Observable<BusinessFeedback[]>{
    return this.http.get<BusinessFeedback[]>(`${this.baseUrl}/feedbacks/`)
  }
  // need to add rule, only post allowed when a service was consumed
  postFeedback(feedback:BusinessFeedback):Observable<BusinessFeedback>{
    return this.http.post<BusinessFeedback>(`${this.baseUrl}/feedbacks/`, feedback)
  }

  getFeedbackById(id:number):Observable<BusinessFeedback>{
    return this.http.get<BusinessFeedback>(`${this.baseUrl}/feedbacks/${id}/`)
  }

  // deletes if is owner
  deleteFeedbackd(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/feedbacks/${id}`)
  }
}
