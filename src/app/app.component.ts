import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1>{{title}} </h1> <h2>{{subject}}</h2>',
  // styles:'body{color:lightgray}h1{background:blue}h2{color:green}'

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ashbel Raj';
  subject='intro to my class';

  dateStarted= new Date();
  location='Bengaluru @ Whitefield';
}
