import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingBrowserComponent } from './pages/booking-browser/booking-browser.component';

const routes: Routes = [
  {
    path:'bookings',component:BookingBrowserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
