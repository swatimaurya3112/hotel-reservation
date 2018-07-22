import { Component, OnInit } from '@angular/core';
import {Hotel} from "../hotel";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

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
      },
      {
        roomType: "Superior Luxury Cottage",
        images: [
          "../assets/cottages/SuperiorLuxury1.jpg",
          "../assets/cottages/SuperiorLuxury2.jpg"
        ],
        description: "Our superior luxury cottages located on a cliff provide a majestic view of the surrounding " +
        "greenery. The décor draws its inspiration from nature and attributes a simple yet classy look to the cottage. " +
        "The sprawling living area comes with a king-size bed and other amenities. " +
        "The cottage is decked with a private east-facing sundeck that allows you to soak in the early morning sun, " +
        "and offers a 180º view of the valley.",
        details: [
          ["Number of Cottages","4"],
          ["Dimension","608 square feet"],
          ["Occupancy","2 Adults"],
          ["Extra Person","No"]
        ],
        price: 27000,
        offerings: "Superior Luxury Cottages are fully equipped with superior linen and ultra-modern in-room amenities" +
        " like complimentary non-alcoholic mini bar, 3D LED television with HD satellite channels, 3D movie library, " +
        "free Wi-Fi and comfortable lounge chairs in the private balcony.",
        amenities: {
          restaurant: "Non- alcoholic minibar replenished once in day and alcoholic beverages on chargeable basis",
          hotel: "Plush King Bed with ergonomic mattress, superior bed linen",
          wifi: "Free Wi-Fi during stay",
          live_tv: "50″ 3D LCD television, Apple TV, 3D movie library, Ipad",
          casino: "Chess board on coffee table, recliner sofa on private sundeck, binoculars",
          all_inclusive: "Telephone, electronic safe, air conditioner, coffee and tea maker, rain shower, organic shower" +
          " supplies, hair dryer, electric golf car on call"
        }
      },
      {
        roomType: "Suite Cottage",
        images: [
          "../assets/cottages/SuiteCottage1.jpg",
          "../assets/cottages/SuiteCottage2.jpg"
        ],
        description: "The Suite cottage expresses the joy of living large. The wall-to-wall wood panelling and the" +
        " colour combination recreates the soft hues of nature. It promises more privacy and offers a magnificent view" +
        " of the dense greenery around. This spacious accommodation comprises of a separate bedroom and a living area." +
        " The cottage is endowed with a unique private sundeck on the east with recliners that will tempt you to spend" +
        " your time in complete idleness",
        details: [
          ["Number of Cottages","8"],
          ["Dimension","891 square feet"],
          ["Occupancy","2 Adults"],
          ["Extra Person"," 1 Adult (On 5ft Couch)"]
        ],
        price: 34000,
        offerings: "Suite Cottages are equipped with modern in-room amenities like complimentary non-alcoholic mini " +
        "bar, LED television with satellite channels, free Wi-Fi and comfortable lounge chairs in a large private " +
        "sundeck for a perfect holiday!",
        amenities: {
          restaurant: "Non-alcoholic minibar replenished once in day",
          hotel: "Plush King Bed with ergonomic mattress",
          wifi: "Free Wi-Fi during stay",
          live_tv: "42″ LCD TV with satellite channels",
          casino: "Chess board on coffee table, recliner sofa at private sundeck",
          all_inclusive: "Telephone, electronic safe, air conditioner, coffee and tea maker, rain shower, " +
          "organic shower supplies, hair dryer, electric golf car on call"
        }
      },
      {
        roomType: "Eden Lotus Cottage",
        images: [
          "../assets/cottages/EdenLotus1.jpg",
          "../assets/cottages/EdenLotus2.jpg"
        ],
        description: "Our most exclusive cottage offers the largest accommodation; its design allows for enhanced" +
        " privacy and a grand stay. The cottage houses two bedrooms with attached bath, an expansive living room, and" +
        " a sundeck. Guests can entertain themselves with the Jacuzzi right at the center of the sundeck discretely" +
        " hidden from outside. The deck loungers make for a perfect setting for an evening rendezvous. The lavish " +
        "interiors are endowed with superior décor, subtle colors and elegant embellishments.",
        details: [
          ["Number of Cottages","2"],
          ["Dimension","1670 square feet"],
          ["Occupancy","4 Adults"],
          ["Extra Person","No"]
        ],
        price: 60000,
        offerings: "Eden Lotus Cottages are equipped with superior linen and ultra-modern in-room amenities like" +
        " complimentary non-alcoholic mini bar, 3D LED television with HD satellite channels, 3D movie library," +
        " free Wi-Fi and comfortable lounge chairs and a Jacuzzi in the private balcony.",
        amenities: {
          restaurant: "Non- alcoholic minibar replenished once in day and alcoholic beverages on chargeable basis",
          hotel: "Plush King Bed with ergonomic mattress, superior bed linen",
          wifi: "Free Wi-Fi during stay",
          live_tv: "50″ 3D LED television, Apple TV, 3D movie library",
          casino: "Chess board on coffee table, recliner sofa at private sundeck with Jacuzzi",
          all_inclusive: "Telephone, electronic safe, air conditioner, coffee and tea maker, rain shower, " +
          "organic shower supplies, hair dryer, electric golf car on call"
        }
      }
    ]
  };

  rooms = this.hotel.roomList;

  constructor() { }

  ngOnInit() {
  }

}
