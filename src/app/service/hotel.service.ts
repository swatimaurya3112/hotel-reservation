import { Injectable } from '@angular/core';

import { Observable} from "rxjs";
import { Hotel } from "../model/hotel";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class HotelService {

  private _url: string = "/assets/data/hotel.json";

  constructor(private http: HttpClient) {
  }

  getHotel(): Observable<Hotel> {
    return this.http.get<Hotel>(this._url);
  }

}
