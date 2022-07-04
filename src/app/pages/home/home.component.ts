import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import { KeyValue } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currencies: any[] = []
  convert_result: any[] = []
  converted_value = null
  keys: any[] = null

  public onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.currencyService.getAvailableCurrencies().subscribe((currencies) => (this.currencies = currencies))
  }

  convertCurrency(currency_from: string, currency_to: string, value: any) {
    this.currencyService.getConvertedValues(currency_from, currency_to, value).subscribe((convert_result) => (this.convert_result = convert_result))

    //this.converted_value = this.convert_result[0].high * value
    this.keys = Object.keys(this.convert_result)
    
  }

}
