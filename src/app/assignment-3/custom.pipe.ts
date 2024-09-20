import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: string, prefixText:string, suffixText?:string): string {
    if(value==null) return value;
    return prefixText+value.split("").reverse().join("")+" "+suffixText;
  }

}
