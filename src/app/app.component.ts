import { Component,OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';
import { filter, Observable } from 'rxjs';


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
  //  value = "Message from Parent";
  // allList:any=[];
  // constructor(private api: UserdataService) {
  //   this.allList = this.api.getAllData()
  // }
  
  constructor() { }
  ngOnInit() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve("Promise is Working")
      }, 1000)
    });
    promise.then(result => console.log(result));


    const observable = new Observable(subscribe => {
      setTimeout(() => {
        subscribe.next("Observable is working");
        subscribe.next("Observable is working1");
        subscribe.next("Observable is working2");
      }, 1000)
    });
    observable.pipe(filter (d => d === "Observable is working2"))
      .subscribe(result => console.log(result));
    
  }

}

