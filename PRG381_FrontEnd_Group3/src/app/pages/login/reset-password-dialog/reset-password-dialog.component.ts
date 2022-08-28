import { Component, OnInit } from '@angular/core';
import { IResetPasswordRequest, IResetPasswordService, ResetPasswordService } from 'src/app/services/reset-password/reset-password.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.css']
})
export class ResetPasswordDialogComponent implements OnInit {

  resetPasswordRequest:IResetPasswordRequest={
    email:"",
    newPassword:"",
    oldPassword:"",
  }
  constructor(private resetService:ResetPasswordService, public dialogRef:MatDialogRef<ResetPasswordDialogComponent>) { }

  ngOnInit(): void {
  }

  createAdmin(): void{
    if (this.resetPassword(this.resetPasswordRequest)) {
      alert("Password Reset Failed")
    }
    this.dialogRef.close(true);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  resetPassword(resetPasswordrequest: IResetPasswordRequest) : Boolean{
    this.resetService.resetPassword(resetPasswordrequest).subscribe(val=>{
      if (val) {
        return true
      } 
      else return false
    }
    )
    return false;
  }
  
}
