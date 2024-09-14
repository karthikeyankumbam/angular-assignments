import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private dataSubject: BehaviorSubject<any> =new BehaviorSubject<any>(null);
  public data$: Observable<any> =this.dataSubject.asObservable();

  private newDataSubject: BehaviorSubject<any> =new BehaviorSubject<any>(null);
  public newData$: Observable<any> =this.newDataSubject.asObservable();
  constructor() { 

  }
  setData(data:any){
    this.dataSubject.next(data);
  }
  setData2(data:any){
    this.newDataSubject.next(data);
  }
}
