import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BookingComponent } from './component/booking/booking.component';
import { ProfileComponent } from './component/profile/profile.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { SearchComponent } from './component/search/search.component';
import { HomeComponent } from './component/home/home.component';
import { ThankyouComponent } from './component/thankyou/thankyou.component'

import { HotelService } from './service/hotel.service';
import { BookingService } from './service/booking.service';
import { CustomerService } from './service/customer.service';
import { AvailabilityService } from './service/availability.service';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ProfileComponent,
    InventoryComponent,
    SearchComponent,
    HomeComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HotelService, BookingService, AvailabilityService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
