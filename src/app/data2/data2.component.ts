import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../../Product';

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrl: './data2.component.css'
})
export class Data2Component {
  products: Product[]=[];
  tempProductId: string ="";
  product: Product = new Product();
  // foundProduct?: Product;
  // findId: any;
  // dataService: DataService=;
  constructor(private dataService: DataService){
     this.products=dataService.getAllProducts();
     
    }
     getProductById():void{
      console.log("called in data2 component " + this.tempProductId);
       this.product= this.dataService.getProductById(this.tempProductId);
      }
}
