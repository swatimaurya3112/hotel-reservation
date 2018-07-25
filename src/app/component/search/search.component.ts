import { Component, OnInit } from '@angular/core';
import {Search} from "../../model/search";
import {AvailabilityService} from "../../service/availability.service";
import {HotelService} from "../../service/hotel.service";
import {Hotel} from "../../model/hotel";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  get hotel() : Hotel{
    return this.hotelService.hotel;
  }

  get search() : Search{
    return this.availabilityService.search;
  }

  constructor(private availabilityService:AvailabilityService, private hotelService: HotelService) {

  }

  ngOnInit() {
  }

  checkRooms(search:Search) {
    console.log(search);
    this.availabilityService.findAvailability(this.search);
  }

}
