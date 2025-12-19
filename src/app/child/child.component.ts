import { Component, Input } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() product : Product= new Product();
  
}
