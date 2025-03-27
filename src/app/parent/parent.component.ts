import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
 
  message: string = '';
  Message($event:string) {
    this.message = $event;
    console.log("Message from child:", this.message);
  } 
}