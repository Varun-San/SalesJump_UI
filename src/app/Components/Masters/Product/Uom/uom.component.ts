import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-uom',
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
  templateUrl: './uom.component.html',
  styleUrl: './uom.component.css',
})
export class UomComponent {
  selectedUom: { uom: any; index: number } | null = null;

  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [{ label: 'Edit Details', action: 'edit' }];

  handleMenuAction(action: string) {
    // Ensure SelectedUom exists before performing any action
    if (!this.selectedUom) return;

    switch (action) {
      case 'edit':
        this.editUom(this.selectedUom.uom, this.selectedUom.index);
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  uomList: {
    add_Uom_Name: string;
    add_Uom_Slno: string;
  }[] = [];

  constructor(private router: Router) {}

  editUom(uom: any, index: number) {
    this.router.navigate(['/master/product/uom/add-uom'], {
      state: { uom, index },
    });
  }

  ngOnInit() {
    const stored = sessionStorage.getItem('add_Uom');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.uomList = dataArray.map((uom: any) => ({
          add_Uom_Name: uom.add_Uom_Name || '',
          add_Uom_Slno: uom.add_Uom_Slno || '',
        }));

        console.log('Loaded Uom:', this.uomList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for Uom-data');
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

  loadUom() {
    const data = sessionStorage.getItem('add_Uom');
    if (data) {
      this.uomList = JSON.parse(data); // Load updated uom into the component
    } else {
      console.warn('No Uom data found in sessionStorage.');
    }
  }
}
