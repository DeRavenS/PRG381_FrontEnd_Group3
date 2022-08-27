import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrowseRequest } from 'src/app/models/browse-request-interface';
import { IBRowsedStudent } from 'src/app/models/browsed-student';
import {  PagedResponse } from 'src/app/models/paged-response-interface';
import { IDetialedStudent } from 'src/app/models/student-interface';
import { environment } from 'src/environments/environment';

//request models for various student services
export interface IStudentBrowseRequest extends IBrowseRequest{
}

export interface IDeleteStudentRequest{
  studentID:number;
}

export interface IStudentDetailsRequest{
  studentID: string;
}

export interface IUpdateStudentRequest {
  students:IDetialedStudent[]
}


//interface of service responsible for managing students
export interface IStudentManagementService {
  getStudents(request:IStudentBrowseRequest):Observable<PagedResponse<IBRowsedStudent>>;
  deleteStudents(request:IDeleteStudentRequest):Observable<Object>;
  studentDetails(request:IStudentDetailsRequest):Observable<IDetialedStudent>;
  updateStudent(request:IUpdateStudentRequest):Observable<Object>;
}

@Injectable({
  providedIn: 'root'
})
export class StudentManagementService implements IStudentManagementService{
  API_URL:string = `${environment.api_url}/student`
  

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

  studentDetails(request: IStudentDetailsRequest): Observable<IDetialedStudent> {
    let params = new HttpParams
    params=params.set("studentID",request.studentID)
    return this.http.get<IDetialedStudent>(this.API_URL,{params:params})
  }

  updateStudent(request: IUpdateStudentRequest): Observable<Object> {
      return this.http.patch<Object>(this.API_URL,request)
  }

}
