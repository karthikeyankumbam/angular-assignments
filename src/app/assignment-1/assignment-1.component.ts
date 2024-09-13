import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment-1',
  standalone: true,
  imports: [ParentComponent,FormsModule],
  templateUrl: './assignment-1.component.html',
  styleUrl: './assignment-1.component.css'
})
export class Assignment1Component {
  interpolatedData:string="";
  twowayData:string="";
  myColor:string="";
  changeData(data:any){
    this.interpolatedData=data.target.value
  }
}
