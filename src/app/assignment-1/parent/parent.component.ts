import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  myData=""
  childData=""
  borderColor: string = 'brown';
  borderWidth: string = '5px';
  borderStyle: string = 'solid';
  handleDataFromChild(data: string) {
    this.childData = data; // Update the property with the received data
    console.log('Data received from child:', this.childData);
  }
}
