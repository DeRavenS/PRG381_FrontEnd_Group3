import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IRegisterAdminRequest, LoginRegisterManagementService } from 'src/app/services/login-register/login-register.service';

@Component({
  selector: 'app-new-admin-dialog',
  templateUrl: './new-admin-dialog.component.html',
  styleUrls: ['./new-admin-dialog.component.css']
})
export class NewAdminDialogComponent implements OnInit {

  admin:IRegisterAdminRequest={
    adminContact:"",
    adminEmail:"",
    adminName:"",
    adminPassword:"",
  };

  constructor(private registerService:LoginRegisterManagementService, public dialogRef:MatDialogRef<NewAdminDialogComponent>) { }

  ngOnInit(): void {
  }

  createAdmin(): void{
    this.dialogRef.close(true);
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
