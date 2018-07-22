import { Component, OnInit } from '@angular/core';
import { HOTEL } from '../mock-hotel';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  hotel = HOTEL;
  rooms = this.hotel.roomList;

  constructor() { }

  ngOnInit() {
  }

}
