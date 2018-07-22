import { Amenities } from "./amenities";

export class Room {
  roomType: string;
  images: string[];
  description: string;
  details: string[][];
  offerings: string;
  amenities: Amenities;
  price: number;
}
