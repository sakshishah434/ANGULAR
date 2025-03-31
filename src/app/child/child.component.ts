import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() receiveMessage = new EventEmitter<string>();
 
dataToParent(){
  
  this.receiveMessage.emit("come home");
  
  }
  
}
