import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  hotel: Hotel = {
    id: "5eced",
    name: 'The Tamara Coorg',
    image: '../assets/Tamara-Coorg.jpeg',
    roomList: [
      {
        roomType: "Luxury Cottage",
        images: [
          "../assets/cottages/LuxuryCottage1.jpg",
          "../assets/cottages/LuxuryCottage2.jpg"
        ],
        description: "Our luxury cottages located on a cliff offer a spectacular view of the surrounding verdant " +
        "greenery. The elegant interiors reflect the serenity of nature in subtle pastel tones. " +
        "The bed on an elevated platform adds a dramatic feel and a spacious look to the living area." +
        " The luxury cottage opens to an east-facing private sundeck, an ideal haunt to unwind.",
        details: [
          ["Number of Cottages","41 & 1 Accessible Cottage"],
          ["Dimension","608 square feet"],
          ["Occupancy","2 Adults"],
          ["Extra Person","1 Adult (Age limit 12- 15 years on a 5ft Couch)"]
        ],
        price: 18000,
        offerings: "Our Luxury Cottages are fully equipped with all amenities to make your stay pleasant and comfortable. " +
        "These rooms come with complimentary non-alcoholic mini bar, LCD television with satellite channels," +
        " free Wi-Fi and comfortable lounge chairs in a private balcony – perfect for a lazy holiday!",
        amenities: {
          restaurant: "Non-alcoholic minibar replenished once in day",
          hotel: "Plush King Bed with ergonomic mattress",
          wifi: "Free Wi-Fi during stay",
          live_tv: "42″ LCD TV with satellite channels",
          casino: "Chess board on coffee table, recliner sofa at private sundeck",
          all_inclusive: "Telephone, electronic safe, air conditioner, coffee and tea maker, rain shower, " +
          "organic shower supplies, hair dryer, electric golf car on call"
        }
      }
    ]
  };

  room = this.hotel.roomList[0];

  amenities = Object.keys(this.room.amenities);

  constructor() { }

  ngOnInit() {
    console.log(this.hotel);
    console.log(this.room);
  }

}
