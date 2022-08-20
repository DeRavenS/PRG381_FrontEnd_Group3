import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IDetialedStudent } from 'src/app/models/student-interface';
import { IStudentDetailsRequest, StudentManagementService } from 'src/app/services/student-browser/student-browser.service';

@Component({
  selector: 'app-student-details-page',
  templateUrl: './student-details-page.component.html',
  styleUrls: ['./student-details-page.component.css']
})
export class StudentDetailsPageComponent implements OnInit {

  //Empty student instantiated
  student:IDetialedStudent={
    courses:[],
    studentAddress:"",
    studentEmail:"",
    studentID:"",
    studentName:""
  }

  busy=false;//Used to know if the application is waiting for something
  constructor(private studentManagementService:StudentManagementService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route)
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
        console.log(val);
      }
      
    })
  }

}
