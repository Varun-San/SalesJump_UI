import { Component } from '@angular/core';
import { MapClickComponent } from './map-click/map-click.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-head-quarters',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './head-quarters.component.html',
  styleUrls: ['./head-quarters.component.css'],
})
export class HeadQuartersComponent {
  faSearch = faSearch;
  //! Filter Option
  showFilterPopup = false;

  //! Menu options
  menuOptions = [
    { label: 'Edit Details', route: '/master/basic_details/designation/edit' },
    { label: 'Deactivate', route: null }, // You can add a click handler for this
    {
      label: 'Menu Rights',
      route: '/master/basic_details/designation/menu-rights',
    },
  ];
  onMenuAction(action: string) {
    if (action === 'Deactivate') {
      // Call deactivate logic
      console.log('Deactivating...');
    }
  }

  // Temporary selections (before Apply)
  tempFilters = {
    status: '',
    role: '',
  };

  // Final applied filters
  activeFilters = {
    status: '',
    role: '',
  };

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
