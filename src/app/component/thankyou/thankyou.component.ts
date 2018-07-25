import { Component, OnInit } from '@angular/core';
import {BookingService} from "../../service/booking.service";
import {Room} from "../../model/room";
import {Hotel} from "../../model/hotel";
import {HotelService} from "../../service/hotel.service";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {BookingRequest} from "../../model/bookingRequest";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  get hotel() : Hotel {
    return this.hotelService.hotel;
  }

  get room() : Room {
    return this.bookingService.room;
  }

  get customer() : Customer {
    return this.customerService.customer;
  }

  get bookingRequest() : BookingRequest {
    return this.bookingService.bookingRequest;
  }

  constructor(private bookingService:BookingService,
              private hotelService:HotelService,
              private customerService:CustomerService) { }

  ngOnInit() {
  }

}
