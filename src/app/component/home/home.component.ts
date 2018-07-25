import { Component, OnInit } from '@angular/core';
import {HotelService} from "../../service/hotel.service";
import {Hotel} from "../../model/hotel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get hotel() : Hotel {
    return this.hotelService.hotel;
  }

  constructor(private hotelService: HotelService) {
  }

  ngOnInit() {
  }

}
