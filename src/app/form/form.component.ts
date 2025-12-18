import { Component } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  product : Product = new Product('12','adidas','sports shoe',1,2999);

  onSubmit () {
     console.log(this.product);
  }
}
