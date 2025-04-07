import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @Input() Nvalue: any;
 
  message: string = "";
  receiveMessage($event:string) {
    this.message = $event;
    console.log("Message from parent: ", this.message)
  }
}