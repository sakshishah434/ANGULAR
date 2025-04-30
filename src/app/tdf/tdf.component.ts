import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css',
})
export class TdfComponent {
  ngOnInit(): void {}

  logInForm = new FormGroup({
    user: new FormControl('',[Validators.required]),
    password: new FormControl(''),
  });
  loginUser() {
    console.warn(this.logInForm.value);
  }
  get user() {
    return this.logInForm.get('user');
  }
}

// onSubmit(data: NgForm) {
//   console.log(data.value);

// }

// resetForm(userForm: NgForm) {
//   userForm.resetForm();
// }
