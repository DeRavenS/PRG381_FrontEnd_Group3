import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentBrowserComponent } from './pages/student-browser/student-browser.component';

const routes: Routes = [
  {
    path:'students',component:StudentBrowserComponent
  },
  {
    path:'register',component:StudentBrowserComponent
  },
  {
    path:'courses',component:CourseBrowserComponent
  },
  {
    path: '', component:LoginComponent
  },
  {
    path: 'login', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
