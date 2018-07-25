import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
    this.getCustomer();
  }

  customer: Customer;

  _postUrl: string = "http://localhost:8080/api/customers";

  _getUrl: string = "/assets/data/customer.json";

  getCustomer() {
    return this.http.get<Customer>(this._getUrl)
      .subscribe(
        data => this.customer = data,
        error => console.log(error)
      );
  }

  saveCustomer(customer:Customer) {
    return this.http.post<any>(this._postUrl,customer)
      .subscribe(
        data => this.customer = data,
        error => console.log(error)
      );
  }

}
