import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
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
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ICONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  faSearch = faSearch;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UI STATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  showFilterPopup = false;
  selectedHQ: any = null;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  menuOptions = [
    { label: 'Edit Details', route: null },
    { label: 'Deactivate', route: null },
  ];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CURRENCY DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  CurrencyList: {
    currencyName: string;
    country: string;
    symbol: string;
    valueEquivalentToBaseCurrency: number;
    effectiveFrom: string;
    status: string;
  }[] = [];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  constructor(private router: Router) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ON INIT - LOAD CURRENCY DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  ngOnInit() {
    const stored = sessionStorage.getItem('add-currency');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.CurrencyList = dataArray.map((item: any) => ({
          currencyName: item.currencyName || '',
          country: item.country?.name || '',
          symbol: item.symbol || '',
          valueEquivalentToBaseCurrency: item.equalToBaseCurrency,
          effectiveFrom: item.effectiveFrom || '',
          status: item.status || 'Active',
        }));
      } catch (e) {
        console.warn('Invalid data in sessionStorage for add-currency');
      }
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU HANDLING <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  openMenu(hq: any) {
    this.selectedHQ = hq;
  }

  onMenuAction(action: string) {
    if (!this.selectedHQ) return;

    const stored = sessionStorage.getItem('add-currency');
    let dataArray = stored ? JSON.parse(stored) : [];

    // Find index of selected currency
    const index = dataArray.findIndex(
      (c: any) =>
        c.currencyName === this.selectedHQ.currencyName &&
        c.country?.name === this.selectedHQ.country
    );

    console.log('Selected currency to edit:', dataArray[index]);

    if (action === 'Edit Details') {
      this.router.navigate(['/master/basic_details/currency/add-currency'], {
        state: { currency: dataArray[index], index },
      });
    } else if (action === 'Deactivate') {
      const currentStatus = dataArray[index].status || 'Active';
      dataArray[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';
      sessionStorage.setItem('add-currency', JSON.stringify(dataArray));
      this.ngOnInit();
    }
  }
}
