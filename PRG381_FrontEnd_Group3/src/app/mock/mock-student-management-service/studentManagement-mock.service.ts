import { Injectable } from '@angular/core';
import { concatMap, delay, Observable, of } from 'rxjs';
import { IBRowsedStudent } from 'src/app/models/browsed-student';
import { PagedResponse } from 'src/app/models/paged-response-interface';
import { IDetialedStudent } from 'src/app/models/student-interface';
import {IDeleteStudentRequest, IStudentBrowseRequest, IStudentDetailsRequest, IStudentManagementService, IUpdateStudentRequest } from 'src/app/services/student-browser/student-browser.service';
import { getBrowsedBookingMock } from '../browsedStudentMock';
import { getDetailedStudentMock } from '../detailedStudentMock';

@Injectable({
  providedIn: 'root'
})
export class StudentManagementMockService implements IStudentManagementService{

  constructor() { }
  getStudents(request: IStudentBrowseRequest): Observable<PagedResponse<IBRowsedStudent>> {
    //console.log(request)
    let allItems: IBRowsedStudent[] = []

    // Populate dummy data
    allItems.push(
      getBrowsedBookingMock({ studentID: '1' }),
      getBrowsedBookingMock({ studentID: '2' }),
      getBrowsedBookingMock({ studentID: '3' }),
      getBrowsedBookingMock({ studentID: '4' }),
      getBrowsedBookingMock({ studentID: '5',studentEmail:"me@gmail.com" }),
      getBrowsedBookingMock({ studentID: '6'}),
      getBrowsedBookingMock({ studentID: '7',studentEmail:"yahoo@gmail.com" }),
      getBrowsedBookingMock({ studentID: '8',studentEmail:"microMailMan@gmail.com" }),
      getBrowsedBookingMock({ studentID: '11'}),
      getBrowsedBookingMock({ studentID: '5'}),
    )
      

    // Pagination logic
    let filteredItems: IBRowsedStudent[] = []
    let upperLimt:number

    if (request.page*request.itemsPerPage+request.itemsPerPage>allItems.length) {
      upperLimt=allItems.length
    }
    else upperLimt=request.page*request.itemsPerPage

    for (let i = Math.ceil(request.page*request.itemsPerPage-request.itemsPerPage); i < upperLimt; i++) {
      filteredItems.push(allItems[i])
    }


    // Search by transaction Reference
    

    let pagecount=allItems.length/request.itemsPerPage;
    return of<PagedResponse<IBRowsedStudent>>({
      items: filteredItems,
      page: request.page,
      itemsPerPage:request.itemsPerPage,
      totalItems: allItems.length,
      pageCount: pagecount,
    }).pipe(
      concatMap(item => of(item).pipe(delay(1000)))
    );
  }

  deleteStudents(request: IDeleteStudentRequest): Observable<Object> {
    return of<object>(
      getBrowsedBookingMock()
    );
}

studentDetails(request: IStudentDetailsRequest): Observable<IDetialedStudent> {
    return of<IDetialedStudent>(
      getDetailedStudentMock({studentID:request.studentID})
    )
}

updateStudent(request: IUpdateStudentRequest): Observable<Object> {
    return of<object>(request)
}
}
