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

  search: Search;
  hotel: Hotel;

  constructor(private availabilityService:AvailabilityService, private hotelService: HotelService) {

  }

  ngOnInit() {
    this.hotel = this.hotelService.getHotel().subscribe(
      (data:Hotel)=> {
        this.hotel = data;
        this.search = new Search(new Date(),new Date(),2,this.hotel.id);
      },
      error=>console.log(error)
    );
  }

  onSubmit() {
    console.log(this.search);
    this.availabilityService.findAvailability(this.search);
  }

}
