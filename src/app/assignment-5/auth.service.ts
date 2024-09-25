import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private value: boolean=false;

  setValue(val: boolean) {
    this.value = val;
  }

  getValue():boolean {
    return this.value;
  }
}
