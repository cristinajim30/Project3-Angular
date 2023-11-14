import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component  {
  userName: string = ''.toUpperCase();
  fontList: string[] = ['Poppins','Roboto Mono', 'Dancing Script', 'Josefin Sans'];
 

  optionSelected: string = this.fontList[0]; 
  fontSelected: string = this.fontList[0];
  
  /*getName():void{
    console.log('Valor del input:', this.userName);
    //this.userName = this.userName;
  }*/

  selectOption(): void {
    console.log('Opción seleccionada:', this.optionSelected);
    this.fontSelected = this.optionSelected;

  }
  
}


