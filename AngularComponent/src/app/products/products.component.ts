import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 1, name: "name", price: 123, color: "color", available: "not available", image: "assets/shopping.jpg" },
    { id: 1, name: "name", price: 123, color: "color", available: "available", image: "assets/shopping.jpg" },
    { id: 1, name: "name", price: 123, color: "color", available: "available", image: "assets/shopping.jpg" },
    { id: 1, name: "name", price: 123, color: "color", available: "not available", image: "assets/shopping.jpg" },
    { id: 1, name: "name", price: 123, color: "color", available: "available", image: "assets/shopping.jpg" },
    { id: 1, name: "name", price: 123, color: "color", available: "available", image: "assets/shopping.jpg" },
    { id: 1, name: "name", price: 123, color: "color", available: "available", image: "assets/shopping.jpg" },
    { id: 1, name: "name", price: 123, color: "color", available: "not available", image: "assets/shopping.jpg" },
    { id: 1, name: "name", price: 123, color: "color", available: "available", image: "assets/shopping.jpg" },
    { id: 1, name: "name", price: 123, color: "color", available: "available", image: "assets/shopping.jpg" },
    { id: 1, name: "name", price: 123, color: "color", available: "not available", image: "assets/shopping.jpg" },
  ];
}
