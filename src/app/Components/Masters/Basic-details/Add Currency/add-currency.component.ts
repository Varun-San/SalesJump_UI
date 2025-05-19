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
import { ActivatedRoute } from '@angular/router';
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
  standalone: true,
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-currency.component.html',
  styleUrl: './add-currency.component.css',
})
export class AddCurrencyComponent {
  // Form data
  currencyName = '';
  effectiveFrom: Date | null = null;
  country!: { name: string; symbolList: string[] };
  symbol: string = '';
  symbolList: string[] = [];
  equalToBaseCurrency: number = 0;

  // Edit state
  editMode = false;
  editIndex: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    const nav = this.router.getCurrentNavigation()?.extras.state;
    if (nav && nav['currency']) {
      this.editMode = true;
      this.editIndex = nav['index'];
      const currency = nav['currency'];

      this.currencyName = currency.currencyName || '';

      // 🔥 Find country by name to avoid object reference mismatch
      this.country = this.countryList.find(
        (c) => c.name === currency.country?.name
      ) ?? { name: '', symbolList: [] };

      this.symbolList = this.country?.symbolList || [];
      this.symbol = currency.symbol || '';
      this.equalToBaseCurrency = currency.equalToBaseCurrency || 0;
      this.effectiveFrom = new Date(currency.effectiveFrom || '');
    }
  }

  get isAddCurrencyRoute(): boolean {
    return this.router.url.includes(
      '/master/basic_details/currency/add-currency'
    );
  }

  closeCard() {
    this.router.navigate(['/master/basic_details/currency']);
  }

  onCountryChange() {
    if (this.country) {
      this.symbolList = this.country.symbolList;
      this.symbol = this.symbolList.length > 0 ? this.symbolList[0] : '';

      const exchangeRate = this.exchangeRates[this.country.name];
      this.equalToBaseCurrency = exchangeRate;
    } else {
      this.symbolList = [];
      this.symbol = '';
      this.equalToBaseCurrency = 0;
    }
  }

  saveCurrency() {
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

    const currencyData = {
      currencyName: this.currencyName,
      country: this.country,
      symbol: this.symbol,
      equalToBaseCurrency: this.equalToBaseCurrency,
      effectiveFrom: this.effectiveFrom,
    };

    const existingData = sessionStorage.getItem('add-currency');
    let currencyArray: any[] = [];

    try {
      const parsed = JSON.parse(existingData || '[]');
      currencyArray = Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      currencyArray = [];
    }

    if (this.editMode && this.editIndex !== null) {
      currencyArray[this.editIndex] = currencyData;
    } else {
      currencyArray.push(currencyData);
    }

    sessionStorage.setItem('add-currency', JSON.stringify(currencyArray));

    console.log(
      this.editMode ? 'Updated Currency:' : 'Added Currency:',
      currencyData
    );

    this.closeCard();
  }

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

  exchangeRates: { [key: string]: number } = {
    'United States': 74.85,
    Canada: 60.91,
    'United Kingdom': 98.55,
    Australia: 53.75,
    India: 1,
    Germany: 88.12,
    France: 88.12,
    Brazil: 13.32,
    Mexico: 3.79,
    Japan: 1.52,
    China: 11.71,
    Russia: 1.09,
    'South Korea': 84.64,
    Italy: 88.12,
    Spain: 88.12,
    'South Africa': 14.15,
    Argentina: 9.91,
    Nigeria: 399.75,
    Egypt: 19.52,
    'Saudi Arabia': 0.19,
    'United Arab Emirates': 0.2,
    Turkey: 8.11,
    Indonesia: 1945.1,
    Pakistan: 1.71,
  };
}
