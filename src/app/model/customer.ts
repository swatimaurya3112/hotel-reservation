/**
 * Created by swati on 7/25/18.
 */

export class Customer{
    constructor(
      public customerId: number,
      public name: string,
      public email: string,
      public phoneNumber: number,
      public address1: string,
      public address2: string,
      public city: string,
      public state: string,
      public country: string,
      public zipcode: number,
      public userName: string,
      public password: string,
    ){}
}
