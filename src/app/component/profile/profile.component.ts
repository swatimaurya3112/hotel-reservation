import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/Customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  customer: Customer;

  ngOnInit() {
    this.customerService.getCustomer()
      .subscribe(
        (data:Customer)=>{
          this.customer = data;
          console.log(data);
        },
        error=>console.log(error)
      );
  }

  onSubmit(){
    console.log(this.customer);
    this.customerService.saveCustomer(this.customer)
      .subscribe(
        data=> console.log(data),
        error=>console.log(error)
      );
  }
}
