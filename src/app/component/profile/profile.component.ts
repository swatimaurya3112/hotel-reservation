import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  get customer() : Customer {
    return this.customerService.customer;
  }


  ngOnInit() {

  }

  onSubmit(){
    console.log(this.customer);
    this.customerService.saveCustomer(this.customer);
  }
}
