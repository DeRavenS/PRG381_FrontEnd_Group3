import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentManagementService } from './services/student-browser/student-browser.service';
import { StudentManagementMockService } from './mock/mock-student-management-service/studentManagement-mock.service';
import { StudentBrowserComponent, DeleteUserComponent } from './pages/student-browser/student-browser.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge'
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentDetailsPageComponent, DialogSaveUserComponent } from './pages/student-details-page/student-details-page.component';
import { AdminDetailsPageComponent } from './pages/admin-details-page/admin-details-page.component';
import { AdminService } from './services/admin-service/admin.service';
import { MockAdminManagementService } from './mock/mock-admin-management-service/mock-admin-management.service';
import { NewAdminDialogComponent } from './pages/admin-details-page/new-admin-dialog/new-admin-dialog.component';
import { ResetPasswordDialogComponent } from './pages/login/reset-password-dialog/reset-password-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentBrowserComponent,
    StudentDetailsPageComponent,
    AdminDetailsPageComponent,
    NewAdminDialogComponent,
    LoginComponent,
    RegisterComponent,
    DialogSaveUserComponent,
    DeleteUserComponent,
    ResetPasswordDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatChipsModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatTooltipModule,
    FormsModule,
    MatExpansionModule
  ],
  providers: [
    {provide: StudentManagementService,useClass: StudentManagementService},
    {provide: AdminService,useClass:MockAdminManagementService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
