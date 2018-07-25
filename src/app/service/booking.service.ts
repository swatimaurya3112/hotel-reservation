import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../model/room";
import {HotelService} from "./hotel.service";
import {Card} from "../model/card";
import {Customer} from "../model/customer";
import {Search} from "../model/search";
import {BookingRequest} from "../model/bookingRequest";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  room: Room;
  bookingRequest: BookingRequest;

  private _url: string = "http://localhost:8080/api/bookings/";

  constructor(private http: HttpClient, private hotelService: HotelService) { }

  startBooking(room:Room){
    this.room = room;
  }

  bookRoom(customer:Customer,room:Room,search:Search){
    this.constructBookingRequest(customer,room,search);
    return this.http.post<any>(this._url+customer.customerId+"/book",this.bookingRequest);
  }


  constructBookingRequest(customer:Customer,room:Room,search:Search) {
    this.bookingRequest = new BookingRequest(
      search.hotelId,
      room.roomType,
      search.from,
      search.to,
      search.adults
    )
  }
}
