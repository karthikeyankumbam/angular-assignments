import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-sibling-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sibling-1.component.html',
  styleUrl: './sibling-1.component.css'
})
export class Sibling1Component {
  @Input() parentData!: number;
  myData!:string;
  s2Data!:string;
  borderColor: string = 'green';
  borderWidth: string = '5px';
  borderStyle: string = 'solid';
  data!:any;
  constructor(private sharedService: SharedServiceService){
    this.sharedService.newData$.subscribe((data:any)=>{
      this.s2Data=data;
    })
  }

  sendToS2(){
    this.sharedService.setData(this.myData);
  }
}
