import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { SearchService } from './search.service';
// import { Router } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1>{{title}} </h1> <h2>{{subject}}</h2>',
  // styles:'body{color:lightgray}h1{background:blue}h2{color:green}'

  styleUrl: './app.component.css'
})
export class AppComponent {
  searchText: string="";
  // searchService : SearchService | undefined; ( we cant add here)
  productFound: Product= new Product();
  constructor(private router: Router, private searchService: SearchService){
    // this.productFound=searchService.getProductByBrand(this.searchText);
  }

  
  parentItems:string[]=[]; // ['item1', 'item2']
  onChildEvent(newItem: string){
    this.parentItems.push(newItem);
  }
   products: Product[]=[];


  find(): void {
    console.log(this.searchText);
    this.productFound=this.searchService.getProductByBrand(this.searchText);
    console.log("found product here in find methods is"+this.productFound);
  }
  //  title='routing'

  renderForm(form: string){
    this.router.navigate([form]);
  }

  renderData(data: string){
    this.router.navigate([data]);
  }
  renderBoot(boot: string){
    this.router.navigate([boot]);
  }
  
  renderRegister(register: string)
{
  this.router.navigate([register]);
}




  title = 'Ashbel Raj';
  subject='intro to my class';

  dateStarted= new Date();
  location='Bengaluru @ Whitefield';
}
