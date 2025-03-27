import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 
  @Output() Message = new EventEmitter;
  
  dataToParent() {
    this.Message.emit('come home');
  }
}
