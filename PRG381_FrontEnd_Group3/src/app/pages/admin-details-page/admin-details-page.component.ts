import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute} from '@angular/router';
import { IDetailedAdmin } from 'src/app/models/admin-interface';
import { CurrentUser } from 'src/app/models/currentUser';
import { AdminService, IDetailedAdminRequest } from 'src/app/services/admin-service/admin.service';
import { NewAdminDialogComponent } from './new-admin-dialog/new-admin-dialog.component';

@Component({
  selector: 'app-admin-details-page',
  templateUrl: './admin-details-page.component.html',
  styleUrls: ['./admin-details-page.component.css']
})
export class AdminDetailsPageComponent implements OnInit {
  admin:IDetailedAdmin={
    adminContact:"",
    adminEmail:"",
    adminID:"",
    adminName:""
  }

  busy=false
  constructor(private adminService:AdminService,private route:ActivatedRoute, public dialog: MatDialog) { }

  fieldDisabled = true;

  ngOnInit(): void {
    this.route.queryParams.subscribe(val=>{
      this.load({adminID:val["adminID"]});
      })
  }

   //used to retieve student
   load(detailedAdminRequest:IDetailedAdminRequest) {
    this.busy = true;
    console.log(detailedAdminRequest)
    this.adminService.getAdmin(detailedAdminRequest).subscribe((val) => {
      if (val) {
        this.busy = false;
        this.admin = val;
        console.log(this.admin);
      }
      
    })
  }

  saveInfo(admin:IDetailedAdmin){
    this.adminService.updateAdmin(admin).subscribe(val=>{
      if (val) {
        alert("Information successfully updated")// Temporary
        this.fieldDisabled = true;
      }
    })
  }

  resetInfo(){
    this.route.queryParams.subscribe(val=>{
      this.load({adminID:val["adminID"]});
      })
  }

  editForm() {
    this.fieldDisabled = false;
  }

  createAdmin(){
    let dialogRef = this.dialog.open(NewAdminDialogComponent, {});

    dialogRef.afterClosed().subscribe(result=>{
      if (result) {
        alert("Admin Created Successfully");
      }
    })
  }
}
