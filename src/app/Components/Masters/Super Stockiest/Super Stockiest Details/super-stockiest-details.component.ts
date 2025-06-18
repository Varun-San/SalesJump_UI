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
  selector: 'app-super-stockiest-details',
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
  templateUrl: './super-stockiest-details.component.html',
  styleUrls: ['./super-stockiest-details.component.css'], // fixed typo: styleUrls
})
export class SuperStockiestDetailsComponent {
  constructor(private router: Router) {}

  superStockiestList: SuperStockies[] = [];
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  // Use only this one for selected stockiest in the menu
  selectedStockiestDetails: {
    stockiestDetails: SuperStockies;
    index: number;
  } | null = null;

  // Called when menu button clicked on a row, sets current stockiest & index
  openMenu(stockiest: SuperStockies, index: number) {
    this.selectedStockiestDetails = { stockiestDetails: stockiest, index };
  }

  // Handle menu actions based on selection
  handleMenuAction(action: string) {
    if (!this.selectedStockiestDetails) return;

    switch (action) {
      case 'edit':
        this.editStockiestDetails(
          this.selectedStockiestDetails.stockiestDetails,
          this.selectedStockiestDetails.index
        );
        break;
      case 'deactivate':
        this.toggleStockiestStatus();
        break;
      default:
        console.warn('Unknown action:', action);
    }
  }

  // Navigate to edit page with stockiest data in router state
  editStockiestDetails(stockiestDetails: SuperStockies, index: number) {
    this.router.navigate(
      ['/master/super-stockiest/super-stockiest-details/add-super-sockiest'],
      {
        state: { superStockiest: stockiestDetails, index },
      }
    );
  }

  // Toggle Active/Inactive status for selected stockiest and reload list
  toggleStockiestStatus() {
    if (!this.selectedStockiestDetails) return;

    const data = sessionStorage.getItem('super-stockiest-data');
    let stockiestArray = data ? JSON.parse(data) : [];

    const index = this.selectedStockiestDetails.index;
    if (stockiestArray[index]) {
      const currentStatus = stockiestArray[index].status || 'Active';
      stockiestArray[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem(
        'super-stockiest-data',
        JSON.stringify(stockiestArray)
      );
      this.loadStockiest();
    }

    this.selectedStockiestDetails = null;
  }

  // Load stockiest list from sessionStorage and map to model
  loadStockiest() {
    const stored = sessionStorage.getItem('super-stockiest-data');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.superStockiestList = dataArray.map((stock: any) => ({
          name: stock.name || '',
          contactPerson: stock.contactPerson || '',
          erpcode: stock.erpcode || '',
          mobile: stock.mobile || '',
          userName: stock.userName || '',
          password: stock.password || '',
          state: stock.state || '',
          fieldOfficer: stock.fieldOfficer || '',
          gst: stock.gst || '',
          address: stock.address || '',
          type: stock.type || '',
          subDivision: stock.subDivision || '',
          subDivision2: stock.subDivision2 || [],
          status: stock.status || 'Active',
        }));
      } catch (e) {
        console.warn('Invalid data in sessionStorage for super-stockiest-data');
      }
    }
  }

  ngOnInit() {
    this.loadStockiest();
  }

  // Filter related variables and methods
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
}

interface SuperStockies {
  name: string;
  contactPerson: string;
  erpcode?: string | null;
  mobile: number | string;
  userName: string;
  password: string;
  state?: string | null;
  fieldOfficer: string;
  gst: string;
  address: string;
  type?: string | null;
  subDivision?: string | null;
  subDivision2: string[];
  status?: string;
}
