import { Component, OnInit } from '@angular/core';
import {HOTEL} from "../mock-hotel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotel = HOTEL;
  constructor() { }

  ngOnInit() {
  }

}
