import { Amenities } from "./amenities";

export interface Room {
  roomType: string;
  images: string[];
  description: string;
  details: string[][];
  offerings: string;
  amenities: Amenities;
  price: number;
  numberOfRooms: number;
}
