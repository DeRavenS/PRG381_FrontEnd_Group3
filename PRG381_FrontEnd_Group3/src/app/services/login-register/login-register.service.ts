import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBrowseRequest } from 'src/app/models/browse-request-interface';
import { IBRowsedStudent } from 'src/app/models/browsed-student';
import {  PagedResponse } from 'src/app/models/paged-response-interface';
import { environment } from 'src/environments/environment';

//Login Request Interface
export interface ILoginRequest {
  password:String;
  email: String;
}

export interface ILoginResponse{
  admin:Boolean;
  id: String;
}
export interface IRegisterUserRequest{
  registerAdminRequest?:IRegisterAdminRequest
  registerStudentRequest?:IRegisterStudentRequest
}

export interface IRegisterAdminRequest{
  adminName: String
  adminContact: String
  adminEmail: String
  adminPassword: String
}

export interface IRegisterStudentRequest{
  studentName: String
  studentPassword: String
  studentEmail: String
  studentAddress: String
}
//Login-Register Management Service Inteface
export interface ILoginRegisterManagementService {
  loginUser(request: ILoginRequest): Observable<ILoginResponse>;
  registerStudent(request: IRegisterUserRequest): Observable<Object>;
  registerAdmin(request: IRegisterUserRequest): Observable<Object>
}

@Injectable({
  providedIn: 'root'
})

export class LoginRegisterManagementService implements ILoginRegisterManagementService {

  API_URL:string = `${environment.api_url}`

  constructor(private http:HttpClient) { }

  loginUser(request: ILoginRequest): Observable<ILoginResponse> {   
    return this.http.post<ILoginResponse>(
      this.API_URL+"/login",
      request); 
  }

  registerStudent(request: IRegisterUserRequest): Observable<Object> {
    console.log(request)
      return this.http.post<Object>(this.API_URL+"/student/create",request)
  }

  registerAdmin(request: IRegisterUserRequest): Observable<Object> {
    return this.http.post<Object>(this.API_URL+"/admin/create",request)
  }
}
