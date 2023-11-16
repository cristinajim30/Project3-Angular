import { Routes } from '@angular/router';
import { Exercise1Component } from './components/exercise1/exercise1.component';
import { Exercise2Component } from './components/exercise2/exercise2.component';
import { HomeComponent } from './components/home/home.component';
import { Exercise3Component } from './components/exercise3/exercise3.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'exercise1', component: Exercise1Component},
    {path: 'exercise2', component: Exercise2Component},
    {path: 'exercise3', component: Exercise3Component},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
