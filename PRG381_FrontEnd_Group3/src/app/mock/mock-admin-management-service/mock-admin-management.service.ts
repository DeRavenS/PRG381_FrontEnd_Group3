import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDetailedAdmin } from 'src/app/models/admin-interface';
import { IAdminManagementService, IDeleteAdminRequest, IDetailedAdminRequest,  } from 'src/app/services/admin-service/admin.service';
import { getDetailedAdminMock } from '../detailedAdminMock';

@Injectable({
  providedIn: 'root'
})
export class MockAdminManagementService implements IAdminManagementService{

  constructor() { }

  getAdmin(request: IDetailedAdminRequest): Observable<IDetailedAdmin> {
      return of<IDetailedAdmin>(
        getDetailedAdminMock(request)
      )
  }

  deleteAdmin(request: IDeleteAdminRequest): Observable<Object> {
      return of<Object>({})
  }

  updateAdmin(request: IDetailedAdmin): Observable<Object> {
      return of<Object>(request)
  }
}
