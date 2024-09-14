import { Component } from '@angular/core';
import { Sibling1Component } from "./sibling-1/sibling-1.component";
import { Sibling2Component } from './sibling-2/sibling-2.component';

@Component({
  selector: 'app-assignment-2',
  standalone: true,
  imports: [Sibling1Component,Sibling2Component],
  templateUrl: './assignment-2.component.html',
  styleUrl: './assignment-2.component.css'
})
export class Assignment2Component {

}
