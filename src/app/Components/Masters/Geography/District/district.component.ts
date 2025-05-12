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
import { Router } from '@angular/router';

@Component({
  selector: 'app-district',
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
  templateUrl: './district.component.html',
  styleUrl: './district.component.css',
})
export class DistrictComponent {
  ngOnInit() {
    this.loadDistrict();
  }

  faSearch = faSearch;
  showFilterPopup = false;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  districtList: {
    districtCode: string;
    districtName: string;
    state: number;
    townCount: number;
    status: string;
  }[] = [];

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  selectedDistrict: { district: any; index: number } | null = null;

  handleMenuAction(action: string) {
    if (!this.selectedDistrict) return;

    switch (action) {
      case 'edit':
        this.editDistrict(
          this.selectedDistrict.district,
          this.selectedDistrict.index
        );
        break;

      case 'deactivate':
        this.onMenuAction('deactivate');
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  constructor(private router: Router) {}

  loadDistrict() {
    const data = sessionStorage.getItem('add-district');
    let list = data ? JSON.parse(data) : [];

    list = list.map((district: any, index: number) => ({
      ...district,
      districtCode: `SIP${101 + index}`,
    }));

    this.districtList = list;
  }

  editDistrict(district: any, index: number) {
    this.router.navigate(['master/geography/add-district'], {
      state: { district, index },
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
    if (!this.selectedDistrict) return;

    const data = sessionStorage.getItem('add-district');
    let district = data ? JSON.parse(data) : [];

    const index = this.selectedDistrict.index;

    if (action === 'deactivate' && district[index]) {
      const currentStatus = district[index].status || 'Active';
      district[index].status = currentStatus === 'Active' ? 'Inactive' : 'Active';

      // ✅ Save to the correct key
      sessionStorage.setItem('add-district', JSON.stringify(district));

      this.loadDistrict();
    }

    this.selectedDistrict = null;
  }
}
