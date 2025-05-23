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
import { Router } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-competitions',
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    RouterLink,
    MatTooltip,
    RouterOutlet,
  ],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.css',
})
export class CompetitionsComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [{ label: 'Edit' }, { label: 'View' }, { label: 'Deactivate' }];

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

  selectedHQ: any = null;

  openMenu(hq: any) {
    this.selectedHQ = hq;
  }

  competitionList = [
    {
      title: 'Sales Booster Q1',
      startDate: '2025-01-01',
      endDate: '2025-03-31',
      type: 'Team-Based',
      count: 150,
      description: 'Quarterly competition to boost regional sales performance.',
      status: 'Active',
    },
    {
      title: 'Top Seller March',
      startDate: '2025-03-01',
      endDate: '2025-03-31',
      type: 'Individual',
      count: 50,
      description: 'Rewarding top-selling individuals for March.',
      status: 'Pending',
    },
    {
      title: 'New Market Expansion',
      startDate: '2025-02-15',
      endDate: '2025-05-15',
      type: 'Region-Based',
      count: 80,
      description: 'Encouraging expansion into new geographic zones.',
      status: 'Inactive',
    },
  ];
}
