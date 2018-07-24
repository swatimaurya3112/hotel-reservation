import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  customer: Customer;

  _postUrl: string = "http://localhost:8080/api/customers";

  _getUrl: string = "/assets/data/customer.json";

  getCustomer(): Observable<Customer>{
    return this.http.get<Customer>(this._getUrl);
  }

  saveCustomer(customer:Customer) {
    return this.http.post<any>(this._postUrl,customer);
  }

}
