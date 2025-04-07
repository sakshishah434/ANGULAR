import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  getAllData() {
    return [{
      name: 'Sakshi',
      age: 33,
      email: 'sakshi@getMaxListeners.com'
    },
    {
      name: 'Meet',
      age: 34,
      email: 'meet@getMaxListeners.com'
    }];
  }
}
