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
  selector: 'app-territory',
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
  templateUrl: './territory.component.html',
  styleUrl: './territory.component.css',
})
export class TerritoryComponent {
  ngOnInit() {
    this.loadTerritory();
  }

  faSearch = faSearch;
  showFilterPopup = false;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  territoryList: {
    territoryCode: string;
    territoryName: string;
    zone: number;
    routeCount: number;
    status: string;
  }[] = [];

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  selectedTerritory: { territory: any; index: number } | null = null;

  handleMenuAction(action: string) {
    if (!this.selectedTerritory) return;

    switch (action) {
      case 'edit':
        this.editTerritory(
          this.selectedTerritory.territory,
          this.selectedTerritory.index
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

  loadTerritory() {
    const data = sessionStorage.getItem('add-territory');
    let list = data ? JSON.parse(data) : [];

    list = list.map((territory: any, index: number) => ({
      ...territory,
      territoryCode: `SIP${101 + index}`,
    }));

    this.territoryList = list;
  }

  editTerritory(territory: any, index: number) {
    this.router.navigate(['master/geography/add-territory'], {
      state: { territory, index },
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
    if (!this.selectedTerritory) return;

    const data = sessionStorage.getItem('add-territory');
    let territory = data ? JSON.parse(data) : [];

    const index = this.selectedTerritory.index;

    if (action === 'deactivate' && territory[index]) {
      const currentStatus = territory[index].status || 'Active';
      territory[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      // ✅ Save to the correct key
      sessionStorage.setItem('add-territory', JSON.stringify(territory));

      this.loadTerritory();
    }

    this.selectedTerritory = null;
  }
}
