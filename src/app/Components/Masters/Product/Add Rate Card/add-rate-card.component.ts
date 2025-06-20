import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Country {
  name: string;
  currencyTypes: string[];
}

@Component({
  selector: 'app-add-rate-card',
  standalone: true,
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
  templateUrl: './add-rate-card.component.html',
  styleUrls: ['./add-rate-card.component.css'],
})
export class AddRateCardComponent {
  rateCardName = '';
  effectiveFrom: Date | null = null;
  country!: Country;
  currencyType: string | null = null;
  division: string = '';
  divisionOptions: string[] = [];
  status = 'Active';

  editMode = false;
  editIndex: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    const nav = this.router.getCurrentNavigation()?.extras.state;
    if (nav && nav['currency']) {
      this.editMode = true;
      this.editIndex = nav['index'];
      const currency = nav['currency'];

      this.rateCardName = currency.rateCardName || '';
      this.country = currency.country;
      this.divisionOptions = currency.country?.currencyTypes || [];
      this.division = currency.division || '';
      this.currencyType = currency.currencyType || '';
      this.effectiveFrom = new Date(currency.effectiveFrom);
    }
  }

  get isAddRateCard(): boolean {
    return this.router.url.includes(
      '/master/product/fixed-rate-card/add-rate-card'
    );
  }

  closeCard() {
    this.router.navigate(['/master/product/fixed-rate-card']);
  }

  onCountryChange() {
    if (this.country) {
      this.divisionOptions = this.country.currencyTypes;
      this.division =
        this.divisionOptions.length > 0 ? this.divisionOptions[0] : '';
      this.currencyType = this.division; // optionally set currencyType same as division
    } else {
      this.divisionOptions = [];
      this.division = '';
      this.currencyType = '';
    }
  }

  saveRateCard() {
    if (
      !this.rateCardName ||
      !this.country ||
      !this.division ||
      !this.currencyType ||
      !this.effectiveFrom
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const rateCardData = {
      rateCardName: this.rateCardName,
      country: this.country,
      division: this.division,
      currencyType: this.currencyType,
      effectiveFrom: this.effectiveFrom,
      status: this.status,
    };

    const existingData = sessionStorage.getItem('add-rate-card');
    let currencyArray: any[] = [];

    try {
      const parsed = JSON.parse(existingData || '[]');
      currencyArray = Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      currencyArray = [];
    }

    if (this.editMode && this.editIndex !== null) {
      currencyArray[this.editIndex] = rateCardData;
    } else {
      currencyArray.push(rateCardData);
    }

    sessionStorage.setItem('add-rate-card', JSON.stringify(currencyArray));

    console.log(
      this.editMode ? 'Updated Rate Card:' : 'Added Rate Card:',
      rateCardData
    );

    this.closeCard();
  }

  countryList: Country[] = [
    { name: 'United States', currencyTypes: ['USD'] },
    { name: 'Canada', currencyTypes: ['CAD'] },
    { name: 'United Kingdom', currencyTypes: ['GBP'] },
    { name: 'Australia', currencyTypes: ['AUD'] },
    { name: 'India', currencyTypes: ['INR'] },
    { name: 'Germany', currencyTypes: ['EUR'] },
    { name: 'France', currencyTypes: ['EUR'] },
    { name: 'Brazil', currencyTypes: ['BRL'] },
    { name: 'Mexico', currencyTypes: ['MXN'] },
    { name: 'Japan', currencyTypes: ['JPY'] },
    { name: 'China', currencyTypes: ['CNY'] },
    { name: 'Russia', currencyTypes: ['RUB'] },
    { name: 'South Korea', currencyTypes: ['KRW'] },
    { name: 'Italy', currencyTypes: ['EUR'] },
    { name: 'Spain', currencyTypes: ['EUR'] },
    { name: 'South Africa', currencyTypes: ['ZAR'] },
    { name: 'Argentina', currencyTypes: ['ARS'] },
    { name: 'Nigeria', currencyTypes: ['NGN'] },
    { name: 'Egypt', currencyTypes: ['EGP'] },
    { name: 'Saudi Arabia', currencyTypes: ['SAR'] },
    { name: 'United Arab Emirates', currencyTypes: ['AED'] },
    { name: 'Turkey', currencyTypes: ['TRY'] },
    { name: 'Indonesia', currencyTypes: ['IDR'] },
    { name: 'Pakistan', currencyTypes: ['PKR'] },
  ];
}
