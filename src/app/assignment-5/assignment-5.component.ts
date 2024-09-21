import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-assignment-5',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './assignment-5.component.html',
  styleUrl: './assignment-5.component.css'
})
export class Assignment5Component {
  id:number=8;
}
