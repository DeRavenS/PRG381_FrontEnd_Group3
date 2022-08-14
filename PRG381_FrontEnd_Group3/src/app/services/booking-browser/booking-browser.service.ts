import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBooking } from 'src/app/models/booking';
import { IBrowseRequest } from 'src/app/models/browse-request';
import { IBrowsedBooking } from 'src/app/models/browsed-booking';
import { ListResponse } from 'src/app/models/list-repsponse-interface';
import { environment } from 'src/environments/environment';


export interface IBrowseBookingRequest{
  bookingID?:number,
  userID?:string,
  browseRequest:IBrowseRequest,
  startDate?: Date,
  endDate?: Date,
  theme?: String,
  venue?: String,
  type?: String,
  maxGuests?: number,
  minGuests?: number,
  minCosts?: number,
  maxCosts?: number,
  confirmed?: Boolean
}
export interface IBookingBrowserService {
  getBookings(request:IBrowseBookingRequest):Observable<ListResponse<IBrowsedBooking>>;
}

@Injectable({
  providedIn: 'root'
})
export class BookingBrowserService implements IBookingBrowserService{
  API_URL:string = `${environment.api_url}/bookings`
  

  constructor(private http:HttpClient) { }
  
  getBookings(request: IBrowseBookingRequest): Observable<ListResponse<IBrowsedBooking>>{   
    if (request.userID) {
      return this.http.post<ListResponse<IBrowsedBooking>>(
        this.API_URL,
        request,
        {
          headers:{
            "auth-userID":request.userID
          }
        });
    }
    else
    {
      return this.http.post<ListResponse<IBrowsedBooking>>(
        this.API_URL,
        request
        );
    }
     
  }

}
