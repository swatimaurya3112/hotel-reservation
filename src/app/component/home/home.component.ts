import { Component, OnInit } from '@angular/core';
import {HotelService} from "../../service/hotel.service";
import {Hotel} from "../../model/hotel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotel : Hotel;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    console.log("inside home component");
    console.log(this.hotel);
    this.getHotel();
    console.log(this.hotel);
  }

  getHotel() {
    this.hotelService.getHotel()
      .subscribe(data => {
        this.hotel = data;
        console.log("data in hotelService is");
        console.log(data)
      },
        error => {
          console.log("Rrror", error);
        });
  }

}
