import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../../services/calculator.service';
import { Operations } from '../../models/operations.model';
import { create } from 'domain';

@Component({
  selector: 'app-exercise2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component {

  number1: number = 0;
  inputN1: any = ''; //display by default in input1
  number2: number = 0;
  inputN2: any = ''; //display by default in input1
  result: number = 0;
  inicialResult:any = '';
  operationList: string[] =['add', 'subtract', 'multiply', 'divide']
  selectedOperation: string = this.operationList[0]; // add operation by default
  idOperation: number;
  indexOpTitleCard: number; //operation's number which display in title card
  //private listOperations: Operations[];

  constructor(public calculatorService: CalculatorService) {
    //this.listOperations = [];
    this.idOperation = 1;
    this.indexOpTitleCard =0;
  }

  calculate(): void {
    this.number1 = this.inputN1;
    this.number2 = this.inputN2;

    switch (this.selectedOperation) {
      case this.operationList[0]:
        //add
        console.log("n1: ", this.number1)
        console.log("n2: ", this.number2)
        this.result = this.number1 + this.number2;
        console.log("result: ", this.result)
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
    this.inicialResult = this.result;
    console.log("antes: ", this.indexOpTitleCard);
    console.log("idOperation: ", this.idOperation);
    
    this.createOperation(this.result);
    //console.log("antes: ", this.indexOpTitleCard);
    //this.indexOpTitleCard++;
    console.log("dsp: ", this.indexOpTitleCard);
    
    
  }

  createOperation(result: number){
    const timeNow = new Date();
    const time = timeNow.getHours() + ':' +timeNow.getMinutes() + ':' + timeNow.getSeconds();
    console.log("hora: ", time);
    const operation: Operations = {
      id: "Op-" + this.idOperation,
      time: time,
      result: result,
    };
    this.calculatorService.addOperation(operation);
    this.idOperation++;
  }

  

  clean(): void{
    this.inputN1 = '';
    this.inputN2 = '';
    this.inicialResult = '';
    this.selectedOperation = this.operationList[0]; 

  }
}
