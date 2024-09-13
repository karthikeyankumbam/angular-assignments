import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  assignments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private router:Router){
    
  }
  title = 'Angular-Ui';
  openAssignment(asgnmt:number){
    this.router.navigateByUrl("assignment-"+(asgnmt+1));
  }
}
