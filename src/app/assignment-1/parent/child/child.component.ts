import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() dataFromParent!:string;
  @Output() dataEvent = new EventEmitter<string>(); // Declare the output property
  childData:string=""
  borderColor: string = 'green';
  borderWidth: string = '5px';
  borderStyle: string = 'solid';
  sendData() {
    this.dataEvent.emit(this.childData); // Emit the data
  }
}
