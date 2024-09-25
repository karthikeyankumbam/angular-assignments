import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-assignment-5',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './assignment-5.component.html',
  styleUrl: './assignment-5.component.css'
})
export class Assignment5Component {
  isAdmin=false;
  constructor(private authservice:AuthService){

  }
  id:number=8;
  makeAuthGuardTrue(){
    this.isAdmin=!this.isAdmin;
    console.log(this.isAdmin);
    
    this.authservice.setValue(this.isAdmin);
  }
}
