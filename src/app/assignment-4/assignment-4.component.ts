import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './model';

@Component({
  selector: 'app-assignment-4',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './assignment-4.component.html',
  styleUrl: './assignment-4.component.css'
})
export class Assignment4Component implements OnInit {
  productList: any;
  product!:Product;
  constructor(private apiService: ApiService) {

  }
  ngOnInit(): void {
  }
  getProducts() {
    this.apiService.getProducts().subscribe((res) => {
      this.productList = res;
    });

  }
  resetProducts() {
    this.productList = []
  }
  sendPostRequest() {
    const req = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }
    this.apiService.postRequest(req).subscribe((res)=>{
      console.log(res);
      this.product=res;
    })
  }
}
