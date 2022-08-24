import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';

  constructor(private service : AppServiceService){

  }

  ngOnInit(): void {
    this.getDataFromAPI();
  }

  sendMailToApi(data: any) {
    console.log('data:', data)
      this.service.sendMail(data).subscribe((response) => {
        console.log('Response from APi', response)
      }, (error) => {
        console.log(error);
      })
  }
  getDataFromAPI(){
    this.service.getData().subscribe((response) => {
      console.log('Response from APi', response)
    }, (error) => {
      console.log(error);
    })
  }
}
