import { Routes } from '@angular/router';
import { Assignment1Component } from './assignment-1/assignment-1.component';
import { Assignment2Component } from './assignment-2/assignment-2.component';
import { Assignment3Component } from './assignment-3/assignment-3.component';
import { Assignment4Component } from './assignment-4/assignment-4.component';

export const routes: Routes = [
    { path: 'assignment-1', component: Assignment1Component },
    { path: 'assignment-2', component: Assignment2Component },
    { path: 'assignment-3', component: Assignment3Component },
    { path: 'assignment-4', component: Assignment4Component }
];
