import { Component } from '@angular/core';
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
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', route: '/master/basic_details/designation/edit' },
    { label: 'Deactivate', route: null },
    {
      label: 'Menu Rights',
      route: '/master/basic_details/designation/menu-rights',
    },
  ];

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  // ✅ Dynamic Head Quarters array
  headQuartersList: {
    id: string;
    name: string;
    type: string;
    latitude: string;
    longitude: string;
    status: string;
  }[] = [];

  ngOnInit() {
    const storedHQ = sessionStorage.getItem('headQuartersData');
    if (storedHQ) {
      try {
        const parsed = JSON.parse(storedHQ);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.headQuartersList = dataArray.map((hq: any, index: number) => ({
          id: `HQ ${101 + index}`,
          name: hq.name,
          type: hq.type,
          latitude: hq.latitude,
          longitude: hq.longitude,
          status: 'Active',
        }));
      } catch (e) {
        console.warn('Invalid headquarters data in sessionStorage');
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
  }
}
