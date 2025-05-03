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
  selector: 'app-product-details',
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
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', route: null },
    { label: 'Deactivate', route: null },
  ];

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  productList: {
    prdtCode: string;
    prdtErpCode: string;
    prdtImage: string;
    prdtName: string;
    prdtBaseUom: string;
    prdtDescription: string;
    status: string;
  }[] = [];

  ngOnInit() {
    const stored = sessionStorage.getItem('product-data');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.productList = dataArray.map((product: any) => ({
          prdtCode: product.prdtCode || '',
          prdtErpCode: product.prdtErpCode || '',
          prdtImage: product.prdtImage || '', // Just file name (e.g., "Screenshot (243).png")
          prdtName: product.prdtName || '',
          prdtBaseUom: product.prdtBaseUom || '',
          prdtDescription: product.prdtDescription || '',
          status: 'Active', // Default status
        }));

        console.log('Loaded Products:', this.productList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for product-data');
      }
    }
  }

  toggleFilterPopup() {
    this.showFilterPopup = !this.showFilterPopup;
  }

  applyFilters() {
    this.activeFilters = { ...this.tempFilters };
    this.showFilterPopup = false;
  }

  cancelFilter() {
    this.tempFilters = { ...this.activeFilters };
    this.showFilterPopup = false;
  }

  clearFilter(type: 'status' | 'role') {
    this.activeFilters[type] = '';
    this.tempFilters[type] = '';
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
    this.selectedHQ = null;
  }
}
