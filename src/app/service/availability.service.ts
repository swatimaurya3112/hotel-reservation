import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Search} from "../model/search";
import {Room} from "../model/room";
import {Observable} from "rxjs";
import {HotelService} from "./hotel.service";

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  rooms: Room[];
  search: Search;

  _postUrl = "http://localhost:8080/api/availability";

  constructor(private http: HttpClient, private hotelService:HotelService) {
    this.search = new Search(new Date(),new Date(), 2, this.hotelService.hotel.id)
  }

  findAvailability(search: Search) {
    this.search = search;
    return this.http.post<Room[]>(this._postUrl,search)
      .subscribe(
        data => {this.rooms = data; console.log(data);},
        error => console.log(error)
      );
  }
}
