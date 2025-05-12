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
  selector: 'app-town',
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
  templateUrl: './town.component.html',
  styleUrl: './town.component.css',
})
export class TownComponent {
  ngOnInit() {
    this.loadTown();
  }

  faSearch = faSearch;
  showFilterPopup = false;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  townList: {
    townCode: string;
    townName: string;
    territory: number;
    district: number;
    status: string;
  }[] = [];

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  selectedTown: { town: any; index: number } | null = null;

  handleMenuAction(action: string) {
    if (!this.selectedTown) return;

    switch (action) {
      case 'edit':
        this.editTown(this.selectedTown.town, this.selectedTown.index);
        break;

      case 'deactivate':
        this.onMenuAction('deactivate');
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  constructor(private router: Router) {}

  loadTown() {
    const data = sessionStorage.getItem('add-town');
    let list = data ? JSON.parse(data) : [];

    list = list.map((town: any, index: number) => ({
      ...town,
      townCode: `SIP${101 + index}`,
    }));

    this.townList = list;
  }

  editTown(town: any, index: number) {
    this.router.navigate(['master/geography/add-town'], {
      state: { town, index },
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
    if (!this.selectedTown) return;

    const data = sessionStorage.getItem('add-town');
    let town = data ? JSON.parse(data) : [];

    const index = this.selectedTown.index;

    if (action === 'deactivate' && town[index]) {
      const currentStatus = town[index].status || 'Active';
      town[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      // ✅ Save to the correct key
      sessionStorage.setItem('add-town', JSON.stringify(town));

      this.loadTown();
    }

    this.selectedTown = null;
  }
}
