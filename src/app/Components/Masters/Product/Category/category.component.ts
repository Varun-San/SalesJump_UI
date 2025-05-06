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
  selector: 'app-category',
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
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', route: null },
    { label: 'Deactivate', route: null },
  ];

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  categoryList: {
    category_Code: string;
    category_Name: string;
    category_Divisions: string;
    category_No_Of_Prdts: string;
    status: string;
  }[] = [];

  ngOnInit() {
    const stored = sessionStorage.getItem('add_Category');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.categoryList = dataArray.map((category: any) => ({
          category_Code: category.category_Code || '',
          category_Name: category.category_Name || '',
          category_Divisions: category.category_Divisions || '',
          category_No_Of_Prdts: category.category_No_Of_Prdts || '',
          status: 'Active', // Default status
        }));

        console.log('Loaded Categories:', this.categoryList);
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
