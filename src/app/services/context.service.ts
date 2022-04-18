import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContextService {
  constructor(private httpClient: HttpClient) {}
  apiUrl: string = 'http://localhost:3000/';

  saveData(api: any, data: any): Observable<any> {
    let info = JSON.stringify(data);
    let headers = { headers: { 'content-type': 'application/json' } };
    return this.httpClient.post(this.apiUrl + api, info, headers);
  }
  getData(api: any): Observable<any> {
    return this.httpClient.get(this.apiUrl + api);
  }
}
