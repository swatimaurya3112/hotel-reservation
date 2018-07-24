import { Component, OnInit } from '@angular/core';
import {HotelService} from "../../service/hotel.service";
import {Room} from "../../model/room";
import {Hotel} from "../../model/hotel";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  hotel: Hotel;

  room: Room;

  amenities: string[];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.getHotel();
  }

  getHotel() {
    this.hotelService.getHotel()
      .subscribe(data => {
          this.hotel = data;
          this.room = data.roomList[0];
          this.amenities = Object.keys(this.room.amenities);
          console.log("data in hotelService is");
          console.log(data)
        },
        error => {
          console.log("Rrror", error);
        });
  }
}
