import { CommonModule, CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';

@Component({
  selector: 'app-assignment-3',
  standalone: true,
  imports: [FormsModule,CommonModule,CurrencyPipe,DatePipe,UpperCasePipe,LowerCasePipe,CustomPipe],
  templateUrl: './assignment-3.component.html',
  styleUrl: './assignment-3.component.css'
})
export class Assignment3Component {
  amount!:number;
  currencyValue!:string;

  name!:string;
  selectedValue: string = '';
  options: string[] = ['UpperCasePipe','LowerCasePipe',"TitleCasePipe"];

  selectedCurrency: string = '';
  currencyList: string[] = ['INR','EUR',"AUD"];

  customText!:string;
  prefixText:string="";
  suffixText:string="";

  onSelectCase(event: any) {
    this.selectedValue = event.target.value;
  }
  selectCurrency(event: any) {
    this.selectedCurrency = event.target.value;
  }
}
