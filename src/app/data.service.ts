import { Injectable } from '@angular/core';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = [];
  temp: any;
  constructor() {

    this.products.push(new Product('s1021', 'Tata', 'Dish TV', 10, 2500));
    this.products[1] = new Product('K3023', 'Wipro', 'Blubs', 210, 300);
    this.products[2] = new Product('mp3421', 'TVS', 'Belts', 210, 5500);
    this.products[3] = new Product('tg021', 'Reliance', 'Dish TV', 50, 4500);
    this.products[4] = new Product('po432', 'ActFiber', 'Router', 60, 1400);
    this.products[5] = new Product('ji909', 'Samsung', 'Smart TV', 50, 72500);
    this.products[6] = new Product('bs654', 'LG', 'Airconditioners', 20, 52500);
    this.products[7] = new Product('vh675', 'Crompton', 'Ceiling Fans', 25, 1500);
    this.products[8] = new Product('h2901','Carrier','Aircondirioners',5,50500);
    this.products[9] = new Product('yu721', 'Usha', 'Table fans', 40, 1200);
    this.products[10] = new Product('re454', 'One+', 'Mobiles', 50, 82500);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(pid: any): Product {
    // console.log(this.products[0]);
    // console.log(this.products.filter((prod)=> {prod.productId==pid}));
    // return this.products[0];

    for (var i = 0; i < this.products.length; i++) {
      // console.log("in for");
      // console.log(this.products[i]);
      if (this.products[i].productId == pid) {
        this.temp = this.products[i];
      }
    }
    console.log("from dataservice");
    console.log(this.temp.productId);
    console.log(this.temp.description);
    console.log("end of data service");
    return this.temp;
  }


}
