import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrowseRequest } from 'src/app/models/browse-request-interface';
import { IBRowsedStudent } from 'src/app/models/browsed-student';
import {  PagedResponse } from 'src/app/models/paged-response-interface';
import { environment } from 'src/environments/environment';


export interface IStudentBrowseRequest extends IBrowseRequest{

}

export interface IDeleteStudentRequest{
  studentID:number;
}
export interface IStudentManagementService {
  getStudents(request:IStudentBrowseRequest):Observable<PagedResponse<IBRowsedStudent>>;
  deleteStudents(request:IDeleteStudentRequest):Observable<Object>;
}



@Injectable({
  providedIn: 'root'
})
export class StudentManagementService implements IStudentManagementService{
  API_URL:string = `${environment.api_url}/students`
  

  constructor(private http:HttpClient) { }
  
  getStudents(request: IStudentBrowseRequest): Observable<PagedResponse<IBRowsedStudent>> {   
      return this.http.post<PagedResponse<IBRowsedStudent>>(
        this.API_URL,
        request);
    
     
  }
  deleteStudents(request: IDeleteStudentRequest): Observable<Object>{
      return this.http.delete<object>(
        this.API_URL, 
        {
          body:request
        })
  }

}
