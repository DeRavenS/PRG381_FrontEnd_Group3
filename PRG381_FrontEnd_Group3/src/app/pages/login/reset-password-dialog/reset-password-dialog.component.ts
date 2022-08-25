import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from 'src/app/services/reset-password/reset-password.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.css']
})
export class ResetPasswordDialogComponent implements OnInit {

  constructor(private resetService:ResetPasswordService, public dialogRef:MatDialogRef<ResetPasswordDialogComponent>) { }

  ngOnInit(): void {
  }

  createAdmin(): void{
    this.dialogRef.close(true);
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
