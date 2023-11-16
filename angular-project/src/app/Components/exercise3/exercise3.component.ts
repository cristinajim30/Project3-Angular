import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsService } from '../../services/transactions.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-exercise3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.css'
})
export class Exercise3Component implements OnInit {
  
  transactionList: any[] = [];

  constructor(private _transService: TransactionsService) {}
  public get transService(): TransactionsService {
    return this._transService;
  }
  public set transService(value: TransactionsService) {
    this._transService = value;
  }
  ngOnInit(): void {
    //this.getTransactions();
    console.log("ngOnInit");
    
  }

  

  getTransactions():void{
    this.transService.getJsonData().subscribe((data: any[]) => {
      this.transactionList = data;
      console.log(this.transactionList); 
    });
  }
}
