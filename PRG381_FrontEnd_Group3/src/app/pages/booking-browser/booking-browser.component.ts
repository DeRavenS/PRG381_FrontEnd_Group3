import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { IBrowsedBooking } from 'src/app/models/browsed-booking';
import { ListResponse } from 'src/app/models/list-repsponse-interface';
import { paginator } from 'src/app/models/paginator';
import { BookingBrowserService, IBrowseBookingRequest } from 'src/app/services/booking-browser/booking-browser.service';

@Component({
  selector: 'app-booking-browser',
  templateUrl: './booking-browser.component.html',
  styleUrls: ['./booking-browser.component.css']
})
export class BookingBrowserComponent implements OnInit {

  ELEMENT_DATA: ListResponse<IBrowsedBooking> = {items: [], page: 0, itemsPerPage: 0, totalItems:0,pageCount:0}

  tempBrowseBookingRequest: IBrowseBookingRequest = {
    browseRequest:{
      itemPerPage:10,
      page:1
    },
    userID:"1"
  }
  pageEvent?:PageEvent
  paginator: paginator = {
    page: 1,
    itemsPerPage: 10,
    totalItems: 100,
    pageCount:10
  }

  busy = false
  displayedColumns: string[] = ['BookingID', 'clientName', 'Date','type','confirmed',];

  dataSource: any = []

  constructor(private browseBookingExplorer: BookingBrowserService, private router:Router) {

  }

  // Function to filter through data on search
  // search(bookingid: any){

  //   // create browse request
  //   let request: IBrowseBookingRequest={
  //     userID:"1",
  //     browseRequest:{
  //       itemPerPage:10,
  //       page:1
  //     }
      
  //   }

  //   // display filter results
  //   this.browseBookingExplorer.getBookings(request).subscribe((val)=> {
  //     this.busy = true
  //     if(val){
  //       this.dataSource = val.items
  //       this.busy= false
  //     }
  //   })

  // }

  ngOnInit(): void {
    this.load()
  }

  load(pageEvent?:PageEvent) {
    this.deleteBooking();
    this.busy = true
    let browseBookingRequest:IBrowseBookingRequest
    if (pageEvent) {
      browseBookingRequest={
        browseRequest:{
          itemPerPage: pageEvent.pageSize,
          page:pageEvent.pageIndex+1,
        },

      }
    }else browseBookingRequest=this.tempBrowseBookingRequest

    this.browseBookingExplorer.getBookings(browseBookingRequest).subscribe((val) => {
      if (val) {
        this.busy = false
      }
      console.log(val)
      this.paginator.page = val.page
      this.paginator.itemsPerPage = val.itemsPerPage
      this.paginator.totalItems=val.totalItems
      this.paginator.pageCount=val.pageCount
      this.ELEMENT_DATA = val
      this.dataSource = this.ELEMENT_DATA.items
    })
  }

  getBooking(bookingID:string){
    console.log(bookingID)
    this.router.navigate([`/view/booking`],{queryParams:{bookingid:bookingID}})
  }

  deleteBooking(){
    console.log(this.browseBookingExplorer.deleteBooking({bookingID:1}));
  }

}
