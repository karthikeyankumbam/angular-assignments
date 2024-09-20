import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="https://fakestoreapi.com/products";
  constructor(private httpClient:HttpClient) { 

  }
  getProducts(){
    return this.httpClient.get(this.url);
  }
  postRequest(payload:any):Observable<Product>{
    return this.httpClient.post<Product>(this.url,payload);
  }

}
