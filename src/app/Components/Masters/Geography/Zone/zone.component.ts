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
  selector: 'app-zone',
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
  templateUrl: './zone.component.html',
  styleUrl: './zone.component.css',
})
export class ZoneComponent {
  ngOnInit() {
    this.loadZone();
  }

  faSearch = faSearch;
  showFilterPopup = false;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  zoneList: {
    zoneCode: string;
    zoneName: string;
    area: number;
    territory_count: number;
    status: string;
  }[] = [];

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  selectedZone: { zone: any; index: number } | null = null;

  handleMenuAction(action: string) {
    if (!this.selectedZone) return;

    switch (action) {
      case 'edit':
        this.editzone(this.selectedZone.zone, this.selectedZone.index);
        break;

      case 'deactivate':
        this.onMenuAction('deactivate');
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  constructor(private router: Router) {}

  loadZone() {
    const data = sessionStorage.getItem('add-zone');
    let list = data ? JSON.parse(data) : [];

    list = list.map((zone: any, index: number) => ({
      ...zone,
      zoneCode: `SIP${101 + index}`,
    }));

    this.zoneList = list;
  }

  editzone(zone: any, index: number) {
    this.router.navigate(['master/geography/add-zone'], {
      state: { zone, index },
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
    if (!this.selectedZone) return;

    const data = sessionStorage.getItem('add-zone');
    let zone = data ? JSON.parse(data) : [];

    const index = this.selectedZone.index;

    if (action === 'deactivate' && zone[index]) {
      const currentStatus = zone[index].status || 'Active';
      zone[index].status = currentStatus === 'Active' ? 'Inactive' : 'Active';

      // ✅ Save to the correct key
      sessionStorage.setItem('add-zone', JSON.stringify(zone));

      this.loadZone();
    }

    this.selectedZone = null;
  }
}
