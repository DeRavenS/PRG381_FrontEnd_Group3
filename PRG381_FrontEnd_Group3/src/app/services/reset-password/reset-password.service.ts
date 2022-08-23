import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IResetPasswordRequest {
  oldPassword: String
  newPassword: String
  admin: Boolean
}

export interface IResetPasswordService{
  resetPassword(resetPasswordRequest:IResetPasswordRequest):Observable<Object>
}

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService implements IResetPasswordService{
  api_url= environment.api_url+"/password"
  constructor(private http: HttpClient) { }

  resetPassword(resetPasswordRequest: IResetPasswordRequest): Observable<Object> {
      return this.http.patch(this.api_url,resetPasswordRequest);
  }

}
