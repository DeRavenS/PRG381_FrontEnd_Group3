import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/models/currentUser';
import { ILoginRequest, LoginRegisterManagementService } from 'src/app/services/login-register/login-register.service';
import { IResetPasswordRequest, ResetPasswordService } from 'src/app/services/reset-password/reset-password.service';
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginRequest :ILoginRequest={
    password:"",
    email:""
  }
  constructor(public dialog: MatDialog,private loginService:LoginRegisterManagementService,private resetPasswordService: ResetPasswordService, private router:Router) { }


  ngOnInit(): void {
  }

  

  openDialogReset(){
    let dialogRef = this.dialog.open(ResetPasswordDialogComponent, {});

    dialogRef.afterClosed().subscribe(result=>{
      if (result) {
        alert(result);
      }
    })
  }

  login(){
    if (this.loginRequest.email && this.loginRequest.email!=""){
      this.loginService.loginUser(this.loginRequest).subscribe(val=>{
        if (val){
          CurrentUser._admin=val.admin;
          CurrentUser.id=val.id;

          console.log(val)
          if (CurrentUser._admin==true) {
            this.router.navigate(['/students']);
          }
          else {
            
            this.router.navigate(['/students/details'],{queryParams:{studentID:CurrentUser.id}});
          }
        }
        else alert("Invalid Login")

      },error=>{
        alert("Login Failed")
      })
    }
  }

  

}
