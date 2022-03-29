import { Component, OnInit } from '@angular/core';
import { Stock } from '../Stock';

@Component({
  selector: 'appstocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {


  stocks = STOCKS;

  selectedStock:Stock;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(stock:Stock): void {
    this.selectedStock=stock;
  }

}
