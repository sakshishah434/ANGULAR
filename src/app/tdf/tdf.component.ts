import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  ngOnInit(): void {
    
  }
}

  // logInForm = new FormGroup({
  //   user: new FormControl('darsh'),
  //   password: new FormControl('456')

  // });
  // loginUser() {
  //   console.warn(this.logInForm.value);
  // }
    
  // }

  // onSubmit(data: NgForm) {
  //   console.log(data.value);
    
  // }

  // resetForm(userForm: NgForm) {
  //   userForm.resetForm();
  // }


