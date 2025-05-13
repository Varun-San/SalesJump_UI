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
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-tax-allocation',
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
    NgSelectComponent,
  ],
  templateUrl: './tax-allocation.component.html',
  styleUrl: './tax-allocation.component.css',
})
export class TaxAllocationComponent {
  countryList = [{ name: 'India' }, { name: 'United States' }];
  stateList = [
    { name: 'Andhra Pradesh' },
    { name: 'Bihar' },
    { name: 'Delhi' },
    { name: 'Gujarat' },
    { name: 'Karnataka' },
    { name: 'Kerala' },
    { name: 'Maharashtra' },
    { name: 'Punjab' },
    { name: 'Rajasthan' },
    { name: 'Tamil Nadu' },
    { name: 'Uttar Pradesh' },
    { name: 'West Bengal' },
  ];
  gstList = [{ name: 'GST @12' }, { name: 'GST @10' }, { name: 'ZERO TAX' }];
  selectedGst = 'GST @18';
  selectedState = 'Tamil Nadu';
  selectedCountry = 'India';

  faSearch = faSearch;
  showFilterPopup = false;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

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
}
