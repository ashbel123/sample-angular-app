import { Component } from '@angular/core';
import { Book } from '../../Book';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apiclient',
  templateUrl: './apiclient.component.html',
  styleUrl: './apiclient.component.css'
})
export class ApiclientComponent {

  book: Book = new Book();
  constructor(public apiservice: ApiService){}

  getBookById(): void{
    this.apiservice.getBookById().subscribe((b)=> 
    {
      this.book=b;
      console.log(b);
    })
  }
      
}
