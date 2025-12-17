import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { Book } from '../Book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getBookById() : Observable<Book>{
    const url: string = "http://localhost:8090/mybook/1";
    return this.http.get(url);
  }

  
}
