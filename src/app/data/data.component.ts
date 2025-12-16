import { Component } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  productId=101;
  productName="MacBook Retina+";
  productDescription="Lightning Fast";
  price= 14000;
  qty=3;
  isAvailable: boolean =this.qty >0? true: false;

  shipping: String = this.price > 100000 ? "green" : "red";
  canOrder: boolean = this.qty <= 0 ? true : false;
  orderedQty: number=5;
  presentQty: number=0;

  isMember: boolean =false;

  products: Product[]=[];
  ngOnInit(){
    this.products.push( new Product('s1021', 'Tata', 'Dish TV', 10, 2500));
    this.products[1] = new Product('K3023', 'Wipro', 'Blubs', 210, 300);
    this.products[2] = new Product('mp3421', 'TVS', 'Belts', 210, 5500);
    this.products[3] = new Product('tg021', 'Reliance', 'Dish TV', 50, 4500);
    this.products[4] = new Product('po432', 'ActFiber', 'Router', 60, 1400);
    this.products[5] = new Product('ji909', 'Samsung', 'Smart TV', 50, 72500);
    this.products[6] = new Product('bs654', 'LG', 'Airconditioners', 20, 52500);
    this.products[7] = new Product('vh675', 'Crompton',
      'Ceiling Fans',
      25,
      1500
    );
    this.products[8] = new Product(
      'h2901',
      'Carrier',
      'Aircondirioners',
      5,
      50500
    );
    this.products[9] = new Product('yu721', 'Usha', 'Table fans', 40, 1200);
    this.products[10] = new Product('re454', 'One+', 'Mobiles', 50, 82500);

  }



  addOrderedQtry(): void{
    if(this.presentQty<this.qty)
    this.presentQty=this.presentQty+1;
     else
    console.log("cant add more than present stock");
  }

  substractOrderedQty(): void{
    if(this.presentQty>0)
    this.presentQty=this.presentQty-1;
    else
     console.log("cant go below zero");
  }
  displayOrderedQty(): void{
    console.log(this.orderedQty);
  }

  placeOrder(): void{
    console.log('order placed');
  }
}
