import { Component, OnInit } from '@angular/core';
import {Hotel} from "../../model/hotel";
import {Room} from "../../model/room";
import {HotelService} from "../../service/hotel.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  hotel: Hotel;
  rooms: Room[];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.getHotel();
  }

  getHotel() {
    this.hotelService.getHotel()
      .subscribe(data => {
          this.hotel = data;
          this.rooms = data.roomList;
          console.log("data in hotelService is");
          console.log(data)
        },
        error => {
          console.log("Rrror", error);
        });
  }

}
