import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseBrowserComponent } from './pages/course-browser/course-browser.component';
import { StudentBrowserComponent } from './pages/student-browser/student-browser.component';

const routes: Routes = [
  {
    path:'students',component:StudentBrowserComponent
  },
  {
    path:'courses',component:CourseBrowserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
