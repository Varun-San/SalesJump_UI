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

@Component({
  selector: 'app-area',
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css',
})
export class AreaComponent {
  ngOnInit() {
    this.loadarea();
  }

  faSearch = faSearch;
  showFilterPopup = false;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  areaList: {
    areaCode: string;
    areaName: string;
    state: number;
    zoneCount: number;
    status: string;
  }[] = [];

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  selectedArea: { area: any; index: number } | null = null;

  handleMenuAction(action: string) {
    if (!this.selectedArea) return;

    switch (action) {
      case 'edit':
        this.editArea(this.selectedArea.area, this.selectedArea.index);
        break;

      case 'deactivate':
        this.onMenuAction('deactivate');
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  constructor(private router: Router) {}

  loadarea() {
    const data = sessionStorage.getItem('add-area');
    let list = data ? JSON.parse(data) : [];

    list = list.map((area: any, index: number) => ({
      ...area,
      areaCode: `SIP${101 + index}`,
    }));

    this.areaList = list;
  }

  editArea(area: any, index: number) {
    this.router.navigate(['master/geography/area/add-area'], {
      state: { area, index },
    });
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
    if (!this.selectedArea) return;

    const data = sessionStorage.getItem('add-area');
    let area = data ? JSON.parse(data) : [];

    const index = this.selectedArea.index;

    if (action === 'deactivate' && area[index]) {
      const currentStatus = area[index].status || 'Active';
      area[index].status = currentStatus === 'Active' ? 'Inactive' : 'Active';

      // ✅ Save to the correct key
      sessionStorage.setItem('add-area', JSON.stringify(area));

      this.loadarea();
    }

    this.selectedArea = null;
  }
}
