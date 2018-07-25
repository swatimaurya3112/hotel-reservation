import { Injectable } from '@angular/core';

import { Observable} from "rxjs";
import { Hotel } from "../model/hotel";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class HotelService {

  hotel: Hotel;

  private _url: string = "/assets/data/hotel.json";

  constructor(private http: HttpClient) {
    this.getHotel();
  }

  getHotel() {
    return this.http.get<Hotel>(this._url)
      .subscribe(
        data => this.hotel = data,
        error => console.log(error)
      );
  }

}
