import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IDetailedAdmin } from 'src/app/models/admin-interface';
import { AdminService, IDetailedAdminRequest, IUpdateAdminRequest } from 'src/app/services/admin-service/admin.service';

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
  constructor(private adminService:AdminService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(val=>{
      this.load({adminID:val["adminID"]});
      })
  }

   //used to retieve student
   load(detailedAdminRequest:IDetailedAdminRequest) {
    this.busy = true;
    this.adminService.getAdmin(detailedAdminRequest).subscribe((val) => {
      if (val) {
        this.busy = false;
        this.admin = val;
        console.log(this.admin);
      }
      
    })
  }

  saveInfo(admin:IDetailedAdmin){
    let req:IUpdateAdminRequest={admins:[admin]}
    this.adminService.updateAdmin(req).subscribe(val=>{
      if (val) {
        alert("Information successfully updated")// Temporary
      }
    })
  }

  resetInfo(){
    this.route.queryParams.subscribe(val=>{
      this.load({adminID:val["adminID"]});
      })
  }
}
