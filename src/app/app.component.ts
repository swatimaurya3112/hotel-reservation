import { Component } from '@angular/core';
import {HOTEL} from "./mock-hotel";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hotel = HOTEL;
}
