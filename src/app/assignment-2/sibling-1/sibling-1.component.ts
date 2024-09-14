import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sibling-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sibling-1.component.html',
  styleUrl: './sibling-1.component.css'
})
export class Sibling1Component {
  myData!:string;
  s2Data!:string;
  borderColor: string = 'green';
  borderWidth: string = '5px';
  borderStyle: string = 'solid';
  sendToS2(){

  }
}
