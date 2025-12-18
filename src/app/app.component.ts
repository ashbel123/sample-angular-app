import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1>{{title}} </h1> <h2>{{subject}}</h2>',
  // styles:'body{color:lightgray}h1{background:blue}h2{color:green}'

  styleUrl: './app.component.css'
})
export class AppComponent {

  //  title='routing'
  constructor(private router: Router){}

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
