import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IDetialedStudent } from 'src/app/models/student-interface';
import { IStudentDetailsRequest, IUpdateStudentRequest, StudentManagementService } from 'src/app/services/student-browser/student-browser.service';



@Component({
  selector: 'app-student-details-page',
  templateUrl: './student-details-page.component.html',
  styleUrls: ['./student-details-page.component.css']
})
export class StudentDetailsPageComponent implements OnInit {

  disabled = true;

  //Empty student instantiated
  student:IDetialedStudent={
    courses:[],
    studentAddress:"",
    studentEmail:"",
    studentID:"",
    studentName:""
  }

  busy=false;//Used to know if the application is waiting for something
  form: any;
  constructor(private studentManagementService:StudentManagementService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(val=>{
      this.load({studentID:val["studentID"]});
      })
    
  }

  //used to retieve student
  load(detailedStudentRequest:IStudentDetailsRequest) {
    this.busy = true;
    this.studentManagementService.studentDetails(detailedStudentRequest).subscribe((val) => {
      if (val) {
        this.busy = false;
        this.student = val;
        console.log(this.student);
        console.log(this.student.courses)
      }
      
    })
  }

  saveInfo(student:IDetialedStudent){
    let req:IUpdateStudentRequest={students:[student]}
    this.studentManagementService.updateStudent(req).subscribe(val=>{
      if (val) {
        alert("Information successfully updated")// Temporary
      }
    })
  }

  resetInfo(){
    this.route.queryParams.subscribe(val=>{
      this.load({studentID:val["studentID"]});
      })
  }

  removeChip(course:String){
    this.student.courses.splice(this.student.courses.indexOf(course),1)
  }
  editFields(){
   this.form.disabled = false;
  }

}
