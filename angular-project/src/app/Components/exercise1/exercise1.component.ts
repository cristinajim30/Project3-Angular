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
  numberSize: any = 50; //size by default
  inputSize: string = ''; // Recovering the input value
  


  selectOption(): void {
    console.log('Opción seleccionada:', this.optionSelected);
    this.fontSelected = this.optionSelected;

  }


  checkNumber(event: KeyboardEvent): any {
    //console.log('Tecla presionada:', event.key);

    // Allow backward key
    if (event.key === 'Backspace') {
      return;
    }
    // Recovering the current input value
    const inputValue = (event.target as HTMLInputElement).value;

    // Check if value is a number from 0 to 300
    const isValidNumber = /^\d+$/.test(inputValue) && +inputValue >= 0 && +inputValue <= 300;

    if (!isValidNumber) {
      alert('Ingrese un número válido del 0 al 300');
      this.inputSize = '';

    } else{ //if number is valid
      console.log("es numero valido");
      this.changeSize(); //call function to change size
      //this.numberSize = inputValue;
    }

  }

  

  changeSize(): void {
    //console.log("valor input: ", this.inputSize);
    this.numberSize = this.inputSize;
    //console.log("numberSize: ", this.numberSize);
  }
  
}


