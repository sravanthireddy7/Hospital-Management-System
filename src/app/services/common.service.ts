import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  setData(data: any, key: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: any) {
    return localStorage.getItem(key);
  }
}
