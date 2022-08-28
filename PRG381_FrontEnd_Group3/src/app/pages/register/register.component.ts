import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRegisterStudentRequest,IRegisterUserRequest, LoginRegisterManagementService } from 'src/app/services/login-register/login-register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerStudentRequest:IRegisterStudentRequest={
    studentAddress:"",
    studentEmail:"",
    studentName:"",
    studentPassword:""
  }

  constructor(private registerService: LoginRegisterManagementService,private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  registerUser(){
    let registerUserRequest:IRegisterUserRequest={
      registerStudentRequest:this.registerStudentRequest
    }

    this.registerService.registerStudent(registerUserRequest).subscribe( resp=>{
      if (resp) {
        this.activeRoute.queryParams.subscribe(val=>{
          if(val["adminID"]){
            this.router.navigate(['/students'])
          }
          else this.router.navigate(['/login'])
        })
      }
      else this.router.navigate(['/login'])
    }

    )
  }

}
