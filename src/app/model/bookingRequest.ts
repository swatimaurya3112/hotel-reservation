/**
 * Created by swati on 7/25/18.
 */

export class BookingRequest{
  constructor(
    public hotelId: string,
    public roomType: string,
    public from: Date,
    public to: Date,
    public adults: number
  ) {}
}
