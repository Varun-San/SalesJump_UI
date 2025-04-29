import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-currency',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-currency.component.html',
  styleUrl: './add-currency.component.css',
})
export class AddCurrencyComponent {
  countryList: { name: string; symbolList: string[] }[] = [
    { name: 'United States', symbolList: ['$', '¢'] },
    { name: 'Canada', symbolList: ['$', '¢'] },
    { name: 'United Kingdom', symbolList: ['£'] },
    { name: 'Australia', symbolList: ['$', '¢'] },
    { name: 'India', symbolList: ['₹'] },
    { name: 'Germany', symbolList: ['€'] },
    { name: 'France', symbolList: ['€'] },
    { name: 'Brazil', symbolList: ['R$'] },
    { name: 'Mexico', symbolList: ['$', '¢'] },
    { name: 'Japan', symbolList: ['¥'] },
    { name: 'China', symbolList: ['¥'] },
    { name: 'Russia', symbolList: ['₽'] },
    { name: 'South Korea', symbolList: ['₩'] },
    { name: 'Italy', symbolList: ['€'] },
    { name: 'Spain', symbolList: ['€'] },
    { name: 'South Africa', symbolList: ['R'] },
    { name: 'Argentina', symbolList: ['AR$'] },
    { name: 'Nigeria', symbolList: ['₦'] },
    { name: 'Egypt', symbolList: ['E£'] },
    { name: 'Saudi Arabia', symbolList: ['ر.س'] },
    { name: 'United Arab Emirates', symbolList: ['د.إ'] },
    { name: 'Turkey', symbolList: ['₺'] },
    { name: 'Indonesia', symbolList: ['Rp'] },
    { name: 'Pakistan', symbolList: ['₨'] },
  ];

  // Exchange rates relative to the base currency (INR)
  exchangeRates: { [key: string]: number } = {
    'United States': 74.85, // 1 INR = 74.85 USD
    Canada: 60.91, // 1 INR = 60.91 CAD
    'United Kingdom': 98.55, // 1 INR = 98.55 GBP
    Australia: 53.75, // 1 INR = 53.75 AUD
    India: 1, // Base currency (INR)
    Germany: 88.12, // 1 INR = 88.12 EUR
    France: 88.12, // 1 INR = 88.12 EUR
    Brazil: 13.32, // 1 INR = 13.32 BRL
    Mexico: 3.79, // 1 INR = 3.79 MXN
    Japan: 1.52, // 1 INR = 1.52 JPY
    China: 11.71, // 1 INR = 11.71 CNY
    Russia: 1.09, // 1 INR = 1.09 RUB
    'South Korea': 84.64, // 1 INR = 84.64 KRW
    Italy: 88.12, // 1 INR = 88.12 EUR
    Spain: 88.12, // 1 INR = 88.12 EUR
    'South Africa': 14.15, // 1 INR = 14.15 ZAR
    Argentina: 9.91, // 1 INR = 9.91 ARS
    Nigeria: 399.75, // 1 INR = 399.75 NGN
    Egypt: 19.52, // 1 INR = 19.52 EGP
    'Saudi Arabia': 0.19, // 1 INR = 0.19 SAR
    'United Arab Emirates': 0.2, // 1 INR = 0.20 AED
    Turkey: 8.11, // 1 INR = 8.11 TRY
    Indonesia: 1945.1, // 1 INR = 1945.10 IDR
    Pakistan: 1.71, // 1 INR = 1.71 PKR
  };

  // This function will handle both updating the symbol list and calculating the equivalent value
  onCountryChange() {
    if (this.country) {
      // Update the symbol list based on the selected country
      this.symbolList = this.country.symbolList;
      this.symbol = this.symbolList.length > 0 ? this.symbolList[0] : '';

      // Calculate the equivalent value based on the selected country
      const exchangeRate = this.exchangeRates[this.country.name];
      this.equalToBaseCurrency = exchangeRate; // Equivalent value to base currency (INR)
    } else {
      // If no country is selected, clear the symbol and set default values
      this.symbolList = [];
      this.symbol = '';
      this.equalToBaseCurrency = 0;
    }
  }

  //! /////////////////////////////////////////////////////
  currencyName = '';
  effectiveFrom: Date | null = null;
  country!: { name: string; symbolList: string[] };
  symbol: string = '';
  symbolList: string[] = [];
  equalToBaseCurrency: number = 0;

  constructor(private router: Router) {}

  get isAddCurrencyRoute(): boolean {
    return this.router.url.includes(
      '/master/basic_details/currency/add-currency'
    );
  }

  closeCard() {
    this.router.navigate(['/master/basic_details/currency']);
  }

  saveDivision() {
    if (
      !this.currencyName ||
      !this.country ||
      !this.symbol ||
      !this.equalToBaseCurrency ||
      !this.effectiveFrom
    ) {
      alert('Please fill all required fields.');
      return;
    }

    console.log('Saving Add work type:', {
      currencyName: this.currencyName,
      country: this.country,
      symbol: this.symbol,
      equalToBaseCurrency: this.equalToBaseCurrency,
      effectiveFrom: this.effectiveFrom,
    });

    const addCurrency = {
      currencyName: this.currencyName,
      country: this.country,
      symbol: this.symbol,
      equalToBaseCurrency: this.equalToBaseCurrency,
      effectiveFrom: this.effectiveFrom,
    };

    const existingData = sessionStorage.getItem('add-currency');
    let add_Currency_Array: any[] = [];

    try {
      const parsed = JSON.parse(existingData || '[]');
      // If parsed is an array, use it; otherwise convert to array
      add_Currency_Array = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      console.warn('Failed to parse sessionStorage data. Resetting...');
      add_Currency_Array = [];
    }

    add_Currency_Array.push(addCurrency);

    sessionStorage.setItem('add-currency', JSON.stringify(add_Currency_Array));

    console.log('Saving Add Currency:', add_Currency_Array);

    this.closeCard();
  }
}
