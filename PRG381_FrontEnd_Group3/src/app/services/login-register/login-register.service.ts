import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBrowseRequest } from 'src/app/models/browse-request-interface';
import { IBRowsedStudent } from 'src/app/models/browsed-student';
import {  PagedResponse } from 'src/app/models/paged-response-interface';
import { environment } from 'src/environments/environment';
import { ILogin } from 'src/app/models/login-request-interface';

//Login Request Interface
export interface ILoginRequest extends IBrowseRequest{

}

//Login-Register Management Service Inteface
export interface ILoginRegisterManagementService {
  loginUser(request: ILoginRequest): Observable<PagedResponse<ILogin>>;
}

@Injectable({
  providedIn: 'root'
})

export class LoginRegisterManagementService implements ILoginRegisterManagementService {

  API_URL:string = `${environment.api_url}/login`

  constructor(private http:HttpClient) { }

  loginUser(request: ILoginRequest): Observable<PagedResponse<ILogin>> {   
    return this.http.post<PagedResponse<ILogin>>(
      this.API_URL,
      request); 
  }
}
