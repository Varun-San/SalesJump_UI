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

@Component({
  selector: 'app-outlet-type',
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
  templateUrl: './outlet-type.component.html',
  styleUrl: './outlet-type.component.css',
})
export class OutletTypeComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  outletTypeList: {
    outletType_Code: string;
    outletType_Name: string;
    category_No_of_Prdts: number;
    status: string;
  }[] = [];

  selectedOutlet: { outlet: any; index: number } | null = null;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadOutletTypes();
  }

  loadOutletTypes() {
    const stored = sessionStorage.getItem('add_Outlet');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.outletTypeList = dataArray.map((outlet: any) => ({
          outletType_Code: outlet.outletType_Code || '',
          outletType_Name: outlet.outletType_Name || '',
          category_No_of_Prdts: outlet.category_No_of_Prdts || 0,
          status: outlet.status || 'Active',
        }));

        console.log('Loaded Outlet Types:', this.outletTypeList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for outlet data');
      }
    }
  }

  handleMenuAction(action: string) {
    if (!this.selectedOutlet) return;

    switch (action) {
      case 'edit':
        this.editOutlet(this.selectedOutlet.outlet, this.selectedOutlet.index);
        break;
      case 'deactivate':
        this.toggleOutletStatus();
        break;
      default:
        console.warn('Unknown action:', action);
    }
  }

  editOutlet(outlet: any, index: number) {
    this.router.navigate(
      ['/master/retailer/retailer-outlet-type/add-routlet-type'],
      {
        state: { outlet, index },
      }
    );
  }

  toggleOutletStatus() {
    const data = sessionStorage.getItem('add_Outlet');
    let outlets = data ? JSON.parse(data) : [];

    if (!this.selectedOutlet) return;

    const index = this.selectedOutlet.index;

    if (outlets[index]) {
      const currentStatus = outlets[index].status || 'Active';
      outlets[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('add_Outlet', JSON.stringify(outlets));
      this.loadOutletTypes();
    }

    this.selectedOutlet = null;
  }

  openMenu(outlet: any, index: number) {
    this.selectedOutlet = { outlet, index };
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
}
