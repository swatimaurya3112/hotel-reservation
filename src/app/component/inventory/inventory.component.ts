import { Component, OnInit } from '@angular/core';
import {Hotel} from "../../model/hotel";
import {Room} from "../../model/room";
import {HotelService} from "../../service/hotel.service";
import {AvailabilityService} from "../../service/availability.service";
import {Search} from "../../model/search";
import {BookingService} from "../../service/booking.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  get rooms() : Room[]{
     return this.availabilityService.rooms;
  }

  get search() : Search{
    return this.availabilityService.search;
  }

  constructor(private availabilityService: AvailabilityService,
              private bookingService: BookingService) { }

  ngOnInit() {
  }

  startBooking(room: Room){
    this.bookingService.startBooking(room);
  }


}
