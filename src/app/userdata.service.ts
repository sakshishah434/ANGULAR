import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor(private http: HttpClient) {}
  getallUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
//   getAllData() {
//     return [{
//       name: 'Sakshi',
//       age: 33,
//       email: 'sakshi@getMaxListeners.com'
//     },
//     {
//       name: 'Meet',
//       age: 34,
//       email: 'meet@getMaxListeners.com'
//     }];
//   }
