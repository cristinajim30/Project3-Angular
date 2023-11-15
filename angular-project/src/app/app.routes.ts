import { Routes } from '@angular/router';
import { Exercise1Component } from './components/exercise1/exercise1.component';
import { Exercise2Component } from './components/exercise2/exercise2.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'exercise1', component: Exercise1Component},
    {path: 'exercise2', component: Exercise2Component},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
