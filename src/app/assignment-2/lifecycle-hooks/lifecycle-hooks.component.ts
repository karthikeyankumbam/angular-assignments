import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() inputValue: string = '';
  @ViewChild('viewChild') viewChild:any;
  // Array to hold lifecycle messages
  lifecycleMessages: string[] = [];

  constructor() {
    this.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log('ngOnChanges called: Called when any data-bound input properties change.', changes);
  }

  ngOnInit() {
    this.log('ngOnInit called:  Component initialized.');
  }

  ngDoCheck() {
    this.log('ngDoCheck called: Called during every change detection run.');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit called:This hook is called once after the first ngDoCheck() and only when the component is initialized. It does not get called again unless the component is destroyed and recreated.');
  }

  ngAfterContentChecked() {
    // this.log('ngAfterViewInit called:'+this.viewChild.nativeElement.textContent);
    this.log('ngAfterContentChecked called: This hook is called after the ngAfterContentInit and every subsequent ngDoCheck call.');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit called:'+this.viewChild.nativeElement.textContent);
    console.log('View initialized:', this.viewChild.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked:', this.viewChild.nativeElement.textContent);
    this.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy called');
  }

  private log(message: string, changes?: SimpleChanges) {
    const time = new Date().toLocaleTimeString();
    const logMessage = changes ? `${message}: ${JSON.stringify(changes)}` : message;
    this.lifecycleMessages.push(`${time} - ${logMessage}`);
  }
}