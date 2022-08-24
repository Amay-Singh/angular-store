import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }
  getData(){
    return this.http.get('/api/getData')
  }
  sendMail(data:any){
    console.log('Data:::', data)
    return this.http.post('/api/sendMail', data)
  }
}
