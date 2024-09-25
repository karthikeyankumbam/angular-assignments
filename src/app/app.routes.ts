import { Routes } from '@angular/router';
import { Assignment1Component } from './assignment-1/assignment-1.component';
import { Assignment2Component } from './assignment-2/assignment-2.component';
import { Assignment3Component } from './assignment-3/assignment-3.component';
import { Assignment4Component } from './assignment-4/assignment-4.component';
import { Assignment5Component } from './assignment-5/assignment-5.component';
import { Assignment6Component } from './assignment-6/assignment-6.component';
import { FirstComponent } from './assignment-5/first/first.component';
import { SecondComponent } from './assignment-5/second/second.component';
import { PathParamComponent } from './assignment-5/path-param/path-param.component';
import { QueryParamComponent } from './assignment-5/query-param/query-param.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'assignment-1', component: Assignment1Component },
    { path: 'assignment-2', component: Assignment2Component },
    { path: 'assignment-3', component: Assignment3Component },
    { path: 'assignment-4', component: Assignment4Component },
    { path: 'assignment-5', component: Assignment5Component,
        children:[
            {path: 'first', component: FirstComponent},
            {path: 'second', component: SecondComponent},
            {path: 'path-parameter/:id',component: PathParamComponent},
            {path: 'query-parameter',component: QueryParamComponent},
            {path: 'guard',component: PathParamComponent, canActivate: [authGuard]},
            {
                path: 'lazy-load',
                loadComponent: () => import('./assignment-5/lazy-loading/lazy/lazy.component').then(m => m.LazyComponent) 
              }

        ]
    },
    { path: 'assignment-6', component: Assignment6Component}

];
