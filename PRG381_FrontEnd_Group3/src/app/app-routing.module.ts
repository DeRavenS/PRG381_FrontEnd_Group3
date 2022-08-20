import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';
import { StudentBrowserComponent } from './pages/student-browser/student-browser.component';
import { StudentDetailsPageComponent } from './pages/student-details-page/student-details-page.component';

const routes: Routes = [
  {
    path:'students',component:StudentBrowserComponent
  },
  {
    path:'courses',component:CourseBrowserComponent
  },
  {
    path: 'students/details',component:StudentDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
