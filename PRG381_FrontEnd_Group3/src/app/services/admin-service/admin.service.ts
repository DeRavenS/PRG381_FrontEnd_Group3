import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import { Observable } from 'rxjs';
import { IDetailedAdmin } from 'src/app/models/admin-interface';
import { environment } from 'src/environments/environment';

//request Models for admin service
export interface IDetailedAdminRequest{
  adminID: string
}

export interface IDeleteAdminRequest{
  adminID: String
}

export interface IAdminManagementService{
  getAdmin(request:IDetailedAdminRequest):Observable<IDetailedAdmin>
  updateAdmin(request:IDetailedAdmin):Observable<Object>
  deleteAdmin(request:IDeleteAdminRequest):Observable<Object>
}


@Injectable({
  providedIn: 'root'
})
export class AdminService implements IAdminManagementService{
  api_url:string=`${environment.api_url}/admin`
  constructor(private http:HttpClient) { }

  getAdmin(request: IDetailedAdminRequest): Observable<IDetailedAdmin> {
    let params= new HttpParams
    params=params.set("adminID",request.adminID)
    return this.http.get<IDetailedAdmin>(this.api_url,{params:params});
  }

  updateAdmin(request: IDetailedAdmin): Observable<Object> {
      return this.http.put<Object>(this.api_url,request)
  }
    
  deleteAdmin(request: IDeleteAdminRequest): Observable<Object> {
      return this.http.delete<Object>(this.api_url,{body:request})
  }

}
