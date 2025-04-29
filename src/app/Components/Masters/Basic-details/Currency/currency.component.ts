import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-currency',
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    RouterLink,
    MatTooltipModule,
    RouterOutlet,
  ],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css',
})
export class CurrencyComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', route: null },
    { label: 'Deactivate', route: null },
  ];

  CurrencyList: {
    currencyName: string;
    country: string;
    symbol: string;
    valueEquivalentToBaseCurrency: number;
    effectiveFrom: string;
    status: string;
  }[] = [];

  ngOnInit() {
    const stored = sessionStorage.getItem('add-currency');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.CurrencyList = dataArray.map((item: any) => ({
          currencyName: item.currencyName || '',
          country: item.country?.name || '', // extract country name
          symbol: item.symbol || '',
          valueEquivalentToBaseCurrency: item.equalToBaseCurrency, // default to '0' if undefined
          effectiveFrom: item.effectiveFrom || '',
          status: item.status || 'Active',
        }));

        console.log(this.CurrencyList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for add-currency');
      }
    }
  }

  selectedHQ: any = null;

  openMenu(hq: any) {
    this.selectedHQ = hq;
  }
  onMenuAction(action: string) {
    if (!this.selectedHQ) return;

    if (action === 'Deactivate') {
      this.selectedHQ.status =
        this.selectedHQ.status === 'Active' ? 'Inactive' : 'Active';
    }
  }
  
}
