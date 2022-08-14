import { Injectable } from '@angular/core';
import { concatMap, delay, Observable, of } from 'rxjs';
import { IBrowsedBooking } from 'src/app/models/browsed-booking';
import { ListResponse } from 'src/app/models/list-repsponse-interface';
import { IBrowseBookingRequest } from 'src/app/services/booking-browser/booking-browser.service';
import { getBrowsedBookingMock } from '../bookingMock';

@Injectable({
  providedIn: 'root'
})
export class BookingbrowserMockService {

  constructor() { }
  getBookings(request: IBrowseBookingRequest): Observable<ListResponse<IBrowsedBooking>> {
    //console.log(request)
    let allItems: IBrowsedBooking[] = []

    // Populate dummy data
    allItems.push(
      getBrowsedBookingMock({ id: 1 }),
      getBrowsedBookingMock({ id: 2 }),
      getBrowsedBookingMock({ id: 3 }),
      getBrowsedBookingMock({ id: 4 }),
      getBrowsedBookingMock({ id: 5,confirmed:false }),
      getBrowsedBookingMock({ id: 6 }),
      getBrowsedBookingMock({ id: 7,confirmed:false }),
      getBrowsedBookingMock({ id: 8,confirmed:false }),
      getBrowsedBookingMock({ id: 9 }),
      getBrowsedBookingMock({ id: 10}),
    )
      

    // Pagination logic
    let filteredItems: IBrowsedBooking[] = []
    let upperLimt:number

    if (request.browseRequest.page*request.browseRequest.itemPerPage+request.browseRequest.itemPerPage>allItems.length) {
      upperLimt=allItems.length
    }
    else upperLimt=request.browseRequest.page*request.browseRequest.itemPerPage

    for (let i = Math.ceil(request.browseRequest.page*request.browseRequest.itemPerPage-request.browseRequest.itemPerPage); i < upperLimt; i++) {
      filteredItems.push(allItems[i])
    }


    // Search by transaction Reference
    if (request.bookingID) {
      filteredItems=allItems.filter((val)=>{
        return val.id == request.bookingID
      })
    }

    let pagecount=allItems.length/request.browseRequest.itemPerPage;
    return of<ListResponse<IBrowsedBooking>>({
      items: filteredItems,
      page: request.browseRequest.page,
      itemsPerPage:request.browseRequest.itemPerPage,
      totalItems: allItems.length,
      pageCount: pagecount,
    }).pipe(
      concatMap(item => of(item).pipe(delay(1000)))
    );
  }
}
