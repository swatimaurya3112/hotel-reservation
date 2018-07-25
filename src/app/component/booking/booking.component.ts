import { Component, OnInit } from '@angular/core';
import {HotelService} from "../../service/hotel.service";
import {Room} from "../../model/room";
import {Hotel} from "../../model/hotel";
import {BookingService} from "../../service/booking.service";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {Card} from "../../model/card";
import {Search} from "../../model/search";
import {AvailabilityService} from "../../service/availability.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  get room() : Room {
    return this.bookingService.room;
  }

  get amenities() : string[] {
    return Object.keys(this.room.amenities);
  }

  get customer() : Customer {
    return this.customerService.customer;
  }

  get search() : Search{
    return this.availabilityService.search;
  }


  constructor(private router: Router,
              private bookingService: BookingService,
              private customerService: CustomerService,
              private availabilityService: AvailabilityService) { }

  ngOnInit() {
  }

  book() {
    this.bookingService.bookRoom(this.customer,this.room, this.search)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/thankyou']);
          },
        error => {
          console.log(error);
          this.router.navigate(['/home']);
        }
      )
  }

}
