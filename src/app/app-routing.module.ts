import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './component/profile/profile.component';
import { BookingComponent } from './component/booking/booking.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { HomeComponent } from './component/home/home.component';
import { ThankyouComponent } from './component/thankyou/thankyou.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: InventoryComponent },
  { path: 'book', component: BookingComponent },
  { path: 'thankyou', component: ThankyouComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
