import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thought';
  txt = "";
  HideShow: boolean = true;
  age = 18;
  color = '';
  name = ['Darsh', 'Sakshi']
  user = [{
    name: 'Darsh',
    age: 3
  },
  {
    name: 'Sakshi',
    age: 33
  }];
}
