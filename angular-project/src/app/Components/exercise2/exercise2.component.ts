import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;
  operationList: string[] =['add', 'subtract', 'multiply', 'divide']
  selectedOperation: string = this.operationList[0]; // add operation by default

  calculate(): void {
    switch (this.selectedOperation) {
      case this.operationList[0]:
        //add
        this.result = this.number1 + this.number2;
        break;
      case this.operationList[1]:
        //subtract
        this.result = this.number1 - this.number2;
        break;
      case this.operationList[2]:
        //multiply
        this.result = this.number1 * this.number2;
        break;
      case this.operationList[3]:
        //divide
        this.result = this.number1 / this.number2;
        break;
      default:
        this.result = 0;
    }
  }
}
