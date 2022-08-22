import { Component, Input, OnInit, Inject} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ActivatedRoute, Route } from '@angular/router';
import { IDetialedStudent } from 'src/app/models/student-interface';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IStudentDetailsRequest, IUpdateStudentRequest, StudentManagementService } from 'src/app/services/student-browser/student-browser.service';



@Component({
  selector: 'app-student-details-page',
  templateUrl: './student-details-page.component.html',
  styleUrls: ['./student-details-page.component.css']
})
export class StudentDetailsPageComponent implements OnInit {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  fieldDisabled = true;

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
  constructor(private studentManagementService:StudentManagementService,private route: ActivatedRoute, public dialog : MatDialog) { }

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
        this.fieldDisabled = true;
      }
    })
  }

  resetInfo(){
    this.route.queryParams.subscribe(val=>{
      this.load({studentID:val["studentID"]});
      })
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our courses
    if (value) {
      this.student.courses.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeChip(course:String){
    this.student.courses.splice(this.student.courses.indexOf(course),1)
  }

  editForm() {
    this.fieldDisabled = false;
  }
  
  openDialog(student:IDetialedStudent) {
    this.saveInfo(student);
    const dialogRef = this.dialog.open(DialogSaveUserComponent, {
      width: 'fit-content',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  });

}
}

@Component({
  selector: 'app-dialog-save-user',
  templateUrl: './dialog-save-user.component.html',
  styleUrls: ['./dialog-save-user.component.css']
})
export class DialogSaveUserComponent {

  constructor(public dialogRef: MatDialogRef<DialogSaveUserComponent>) {}

  onOK(): void {
    this.dialogRef.close();
  }

}
