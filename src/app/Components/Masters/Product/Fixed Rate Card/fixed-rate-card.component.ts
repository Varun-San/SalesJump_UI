import { Component } from '@angular/core';
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
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-rate-card',
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
  templateUrl: './fixed-rate-card.component.html',
  styleUrl: './fixed-rate-card.component.css',
})
export class FixedRateCardComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  rateCardList: any[] = [];
  selectedCard: any = null;

  menuOptions = [
    { label: 'Edit Details', route: null }, // or specify a string route
    { label: 'Deactivate', route: null },
    {
      label: 'Assign Product',
      route: 'master/product/fixed-rate-card/assign-product',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const stored = sessionStorage.getItem('add-rate-card');
    if (stored) {
      try {
        const dataArray = JSON.parse(stored);
        this.rateCardList = Array.isArray(dataArray) ? dataArray : [dataArray];
      } catch {
        console.warn('Invalid rate card data');
        this.rateCardList = [];
      }
    }
  }

  openMenu(card: any) {
    this.selectedCard = card;
  }

  onMenuAction(action: string) {
    if (!this.selectedCard) return;

    const stored = sessionStorage.getItem('add-rate-card');
    let dataArray = stored ? JSON.parse(stored) : [];

    const index = dataArray.findIndex(
      (c: any) =>
        c.rateCardName === this.selectedCard.rateCardName &&
        c.country?.name === this.selectedCard.country?.name &&
        c.currencyType === this.selectedCard.currencyType
    );

    if (action === 'Edit Details') {
      this.router.navigate(['/master/product/fixed-rate-card/add-rate-card'], {
        state: { currency: dataArray[index], index },
      });
    } else if (action === 'Deactivate') {
      const currentStatus = dataArray[index].status || 'Active';
      dataArray[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';
      sessionStorage.setItem('add-rate-card', JSON.stringify(dataArray));
      this.ngOnInit(); // Refresh list
    } else if (action === 'Assign Product') {
      this.router.navigate(['/master/product/fixed-rate-card/assign-product']);
    } else {
      return;
    }
  }
}
