import { Component, OnInit, Inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { IBRowsedStudent } from 'src/app/models/browsed-student';
import { PagedResponse } from 'src/app/models/paged-response-interface';
import { paginator } from 'src/app/models/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentManagementService, IStudentBrowseRequest, IDeleteStudentRequest } from 'src/app/services/student-browser/student-browser.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-student-browser',
  templateUrl: './student-browser.component.html',
  styleUrls: ['./student-browser.component.css']
})
export class StudentBrowserComponent implements OnInit {

  ELEMENT_DATA: PagedResponse<IBRowsedStudent> = {items: [], page: 0, itemsPerPage: 0, totalItems:0,pageCount:0}

  tempBrowseStudentRequest: IStudentBrowseRequest = {
    itemsPerPage:10,
    page:1
  }
  pageEvent?:PageEvent
  paginator: paginator = {
    page: 1,
    itemsPerPage: 10,
    totalItems: 100,
    pageCount:10
  }

  busy = false
  displayedColumns: string[] = ['StudentID', 'StudentName', 'StudentEMail','address', 'actions'];

  dataSource: any = []

  sID = '';


  constructor(private studentManagementService: StudentManagementService, private router:Router, public dialog : MatDialog) {

  }


  ngOnInit(): void {
    this.load()
  }

  load(pageEvent?:PageEvent) {
    this.busy = true
    let browseStudentRequest:IStudentBrowseRequest
    if (pageEvent) {
      browseStudentRequest={
      itemsPerPage: pageEvent.pageSize,
      page:pageEvent.pageIndex+1,
      }
    }else browseStudentRequest=this.tempBrowseStudentRequest

    this.studentManagementService.getStudents(browseStudentRequest).subscribe((val) => {
      if (val) {
        this.busy = false
        console.log(val)
        this.paginator.page = val.page
        this.paginator.itemsPerPage = val.itemsPerPage
        this.paginator.totalItems=val.totalItems
        this.paginator.pageCount=val.pageCount
        this.ELEMENT_DATA = val
        this.dataSource = this.ELEMENT_DATA.items
      }
    })
  }

  deleteStudent(studentID:string) {
    console.log("Deleted: " + studentID);
  }

  getStudent(studentID:string){
    console.log(studentID);
    this.router.navigate([`/students/details`],{queryParams:{studentID:studentID}});
  }

  openDialog(studentID:string) {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: 'fit-content',
      data: {studID: studentID, delMet: this.deleteStudent}
    });
}
}

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})

export class DeleteUserComponent implements OnInit {

  studentID = '';
  delMet(studentID: string) {}

  constructor(public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {}

    ngOnInit(): void {
      this.studentID = this.data.studID;
      this.delMet = this.data.delMet;
    }

  onNO(): void {
    this.dialogRef.close();
  }
}
