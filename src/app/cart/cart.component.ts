import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from './../app.component';
import './../../assets/smtp'
import { TitleStrategy } from '@angular/router';
declare let Email: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  apiUrl = "/api/sendEmail";
  constructor(private cartService: CartService, private formBuilder: FormBuilder, private http : HttpClient, private component : AppComponent) { }

  checkoutForm = this.formBuilder.group({
    bill: ''
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    this.component.sendMailToApi(this.items)
  }
}
