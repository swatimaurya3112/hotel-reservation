import { Component, OnInit } from '@angular/core';
import { HOTEL } from '../mock-hotel';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  hotel = HOTEL;

  room = this.hotel.roomList[0];

  amenities = Object.keys(this.room.amenities);

  constructor() { }

  ngOnInit() {
    console.log(this.hotel);
    console.log(this.room);
  }

}
