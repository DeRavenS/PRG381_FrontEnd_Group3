import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(public dialog: MatDialog) { }

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

}
