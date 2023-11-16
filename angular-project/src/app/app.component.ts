import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Exercise1Component } from './components/exercise1/exercise1.component';
import { MenuComponent } from './components/menu/menu.component';
import { Exercise2Component } from './components/exercise2/exercise2.component';
import { Exercise3Component } from './components/exercise3/exercise3.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, Exercise1Component, MenuComponent, Exercise2Component, Exercise3Component, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
}
