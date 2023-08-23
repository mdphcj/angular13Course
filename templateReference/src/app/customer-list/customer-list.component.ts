import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
    selectedCustomer: Customer = {customerNo: 0, name: "", address: "", city: "", country: ""};
    customers: Customer[] = [
      {customerNo: 1, name: "name1", address: "address1", city: "city1", country: "country1"},
      {customerNo: 2, name: "name2", address: "address2", city: "city2", country: "country2"},
      {customerNo: 3, name: "name3", address: "address3", city: "city3", country: "country3"},
      {customerNo: 4, name: "name4", address: "address4", city: "city4", country: "country4"},
      {customerNo: 5, name: "name5", address: "address5", city: "city5", country: "country5"},
      {customerNo: 6, name: "name6", address: "address6", city: "city6", country: "country6"},
    ];
}
