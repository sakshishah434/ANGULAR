import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  ngOnInit(): void {
    
  }
  onSubmit(data: NgForm) {
    console.log(data.value);
    
  }

}
