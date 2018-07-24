import { Component, OnInit } from '@angular/core';
import {Hotel} from "../../model/hotel";
import {Room} from "../../model/room";
import {HotelService} from "../../service/hotel.service";
import {AvailabilityService} from "../../service/availability.service";
import {Search} from "../../model/search";

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

  constructor(private availabilityService: AvailabilityService) { }

  ngOnInit() {
  }


}
