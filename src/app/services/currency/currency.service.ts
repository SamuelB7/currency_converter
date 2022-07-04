import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { catchError, Observable, retry } from 'rxjs';
import { Currency } from './currency';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  private apiUrl = "https://economia.awesomeapi.com.br"

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAvailableCurrencies(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/json/available/uniq`)
  }

  getConvertedValues(currency_from: any, currency_to: any, value: any): Observable<any[]> {
    let result = this.http.get<any>(`${this.apiUrl}/last/${currency_from}-${currency_to}`)
    return result
  }
}
