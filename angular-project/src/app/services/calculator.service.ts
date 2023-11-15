import { Injectable } from '@angular/core';
import { Operations } from '../models/operations.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private operationsList: Operations[];
  constructor() {
    this.operationsList = [];
   }

  //add one Operation'sobject to the array
  addOperation(operation: Operations): void {
    this.operationsList.push(operation);
  }

  getOperations(): Operations[] {
    return this.operationsList.slice();
  }
}
