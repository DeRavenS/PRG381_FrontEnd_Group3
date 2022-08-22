import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetailsPageComponent } from './pages/admin-details-page/admin-details-page.component';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentBrowserComponent } from './pages/student-browser/student-browser.component';
import { StudentDetailsPageComponent } from './pages/student-details-page/student-details-page.component';

const routes: Routes = [
  {
    path:'students',component:StudentBrowserComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'courses',component:CourseBrowserComponent
  },
  {
    path: '', component:LoginComponent
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'students/details',component:StudentDetailsPageComponent
  },
  {
    path: 'admin/details',component:AdminDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
