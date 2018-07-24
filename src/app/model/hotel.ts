/**
 * Created by swati on 7/22/18.
 */
import { Room } from "./room";

export interface Hotel {
  id: string;
  name: string;
  image: string;
  roomList: Room[];
}
