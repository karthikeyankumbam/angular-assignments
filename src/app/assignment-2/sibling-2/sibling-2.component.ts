import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sibling-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sibling-2.component.html',
  styleUrl: './sibling-2.component.css'
})
export class Sibling2Component {
  myData!:string;
  s1Data!:string;
  borderColor: string = 'green';
  borderWidth: string = '5px';
  borderStyle: string = 'solid';
  sendToS1(){

  }
}
