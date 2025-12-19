import { Component, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child2parent',
  templateUrl: './child2parent.component.html',
  styleUrl: './child2parent.component.css'
})
export class Child2parentComponent {

  childItem: string="";
  @Output()
  childEvent = new EventEmitter<string>();

  addChildItem(){
    this.childEvent.emit(this.childItem);
    this.childItem='';
  }

}
