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
  selector: 'app-retailer-creation',
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
  templateUrl: './retailer-creation.component.html',
  styleUrl: './retailer-creation.component.css',
})
export class RetailerCreationComponent {
  constructor(private router: Router) {}

  retailerList: Retailer[] = [];

  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];
  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> STORING IN TEMP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  selectedRetailerDetails: { retailerDetails: any; index: number } | null =
    null;

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HANDLING MENU <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  handleMenuAction(action: string) {
    if (!this.selectedRetailerDetails) return;

    switch (action) {
      case 'edit':
        this.editRetailerDetails(
          this.selectedRetailerDetails.retailerDetails,
          this.selectedRetailerDetails.index
        );
        break;

      case 'deactivate':
        this.toggleRetailerStatus();
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }
  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EDIT RETAILER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  editRetailerDetails(retailerDetails: any, index: number) {
    this.router.navigate(
      ['/master/retailer/retailer-creation/add-creation-retailer'],
      {
        state: { product: retailerDetails, index },
      }
    );
  }
  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RETAILER STATUS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  toggleRetailerStatus() {
    if (!this.selectedRetailerDetails) return;

    const data = sessionStorage.getItem('retailer-data');
    let retailers = data ? JSON.parse(data) : [];

    const index = this.selectedRetailerDetails.index;
    if (retailers[index]) {
      const currentStatus = retailers[index].status || 'Active';
      retailers[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('retailer-data', JSON.stringify(retailers));
      this.loadRetailers();
    }

    this.selectedRetailerDetails = null;
  }
  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LOAD RETAILERS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  loadRetailers() {
    const stored = sessionStorage.getItem('retailer-data');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.retailerList = dataArray.map((retailer: any) => ({
          name: retailer.name || '',
          code: retailer.code || '',
          mobile: retailer.mobile || '',
          contactPerson: retailer.contactPerson || '',
          channel: retailer.channel || '',
          gstNo: retailer.gstNo || '',
          salesTaxNo: retailer.salesTaxNo || '',
          route: retailer.route || '',
          class: retailer.class || '',
          outstanding: retailer.outstanding || '',
          creditLimit: retailer.creditLimit || '',
          advanceAmount: retailer.advanceAmount || '',
          retailerType: retailer.retailerType || '',
          potential: retailer.potential || '',
          category: retailer.category || '',
          uomErpCode: retailer.uomErpCode || '',
          customerWiseAlter: retailer.customerWiseAlter || '',
          latitude: retailer.latitude || '',
          longitude: retailer.longitude || '',
          email: retailer.email || '',
          city: retailer.city || '',
          billingAddress: retailer.billingAddress || '',
          shoppingAddress: retailer.shoppingAddress || '',
          profileImage: retailer.profileImage || '',
          imageBase64: retailer.imageBase64 || [],
          status: retailer.status || 'Active',
        }));
      } catch (e) {
        console.warn('Invalid data in sessionStorage for retailer-data');
      }
    }
  }

  ngOnInit() {
    const stored = sessionStorage.getItem('retailer-data');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.retailerList = dataArray.map((retailer: any) => ({
          name: retailer.name || '',
          code: retailer.code || '',
          mobile: retailer.mobile || '',
          contactPerson: retailer.contactPerson || '',
          channel: retailer.channel || '',
          gstNo: retailer.gstNo || '',
          salesTaxNo: retailer.salesTaxNo || '',
          route: retailer.route || '',
          class: retailer.class || '',
          outstanding: retailer.outstanding || '',
          creditLimit: retailer.creditLimit || '',
          advanceAmount: retailer.advanceAmount || '',
          retailerType: retailer.retailerType || '',
          potential: retailer.potential || '',
          category: retailer.category || '',
          uomErpCode: retailer.uomErpCode || '',
          customerWiseAlter: retailer.customerWiseAlter || '',
          latitude: retailer.latitude || '',
          longitude: retailer.longitude || '',
          email: retailer.email || '',
          city: retailer.city || '',
          billingAddress: retailer.billingAddress || '',
          shoppingAddress: retailer.shoppingAddress || '',
          profileImage: retailer.profileImage || '',
          imageBase64: retailer.imageBase64 || [],
          status: retailer.status || 'Active',
        }));

        console.log('Loaded Retailers:', this.retailerList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for retailer-data');
      }
    }
  }

  openRetailerMenu(retailer: any, index?: number) {
    const i = index ?? this.retailerList.findIndex((r) => r === retailer);
    this.selectedRetailerDetails = { retailerDetails: retailer, index: i };
  }

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HANDLING FILTER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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
interface Retailer {
  name: string;
  code: string;
  mobile: string;
  contactPerson: string;
  channel: string;
  gstNo: string;
  salesTaxNo: string;
  route: string;
  class: string;
  outstanding: string;
  creditLimit: string;
  advanceAmount: string;
  retailerType: string;
  potential: string;
  category: string;
  uomErpCode: string;
  customerWiseAlter: string;
  latitude: string;
  longitude: string;
  email: string;
  city: string;
  billingAddress: string;
  shoppingAddress: string;
  profileImage: string;
  imageBase64?: string[];
  status?: string;
}
