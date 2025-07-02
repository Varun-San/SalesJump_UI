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
  selector: 'app-field-force',
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
  templateUrl: './field-force.component.html',
  styleUrl: './field-force.component.css',
})
export class FieldForceComponent {
  faSearch = faSearch;
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FILTER AND STATUS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  showFilterPopup = false;
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
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM STATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  distributorList: Distributor[] = [];

  selectedDistributorDetails: {
    distributor: Distributor;
    index: number;
  } | null = null;

  constructor(private router: Router) {}
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  ngOnInit() {
    this.loadDistributorList();
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LOAD DATA FROM SESSION STORAGE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  loadDistributorList() {
    const stored = sessionStorage.getItem('Distributor-List-Data');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.distributorList = dataArray.map(
          (d: any): Distributor => ({
            erpCode: d.erpCode || '',
            town: d.town || null,
            mobile: d.mobile || '',
            distributorName: d.distributorName || '',
            type: d.type || null,
            fieldOfficer: d.fieldOfficer || '',
            contactPerson: d.contactPerson || '',
            rate: d.rate || null,
            password: d.password || '',
            email: d.email || '',
            city: d.city || null,
            headQuarters: d.headQuarters || '',
            territory: d.territory || null,
            normValue: d.normValue || '',
            category: d.category || null,
            districtName: d.districtName || null,
            address: d.address || '',
            gstNo: d.gstNo || '',
            userName: d.userName || '',
            designation: d.designation || '',
            dlNo: d.dlNo || '',
            divisions: Array.isArray(d.divisions) ? d.divisions : [],
          })
        );
      } catch (e) {
        console.warn(
          'Invalid data in sessionStorage for Distributor-List-Data'
        );
      }
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATE TO EDIT FORM <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  editDistributor(distributor: Distributor, index: number) {
    this.router.navigate(
      ['/master/distributor/distributor-master/add-distributor'],
      {
        state: { route: distributor, index },
      }
    );
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> OPEN MENU FOR ACTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  openMenu(distributor: Distributor, index: number) {
    this.selectedDistributorDetails = { distributor, index };
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HANDLE ACTION MENU <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  menuOptions = [{ label: 'Edit Details', action: 'edit' }];
  handleMenuAction(action: string) {
    if (!this.selectedDistributorDetails) return;

    switch (action) {
      case 'edit':
        this.editDistributor(
          this.selectedDistributorDetails.distributor,
          this.selectedDistributorDetails.index
        );
        break;
      default:
        console.warn('Unknown action:', action);
    }
  }
}

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DISTRIBUTOR INTERFACE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
interface Distributor {
  erpCode: string;
  town: string | null;
  mobile: string;
  distributorName: string;
  type: string | null;
  fieldOfficer: string;
  contactPerson: string;
  rate: string | null;
  password: string;
  email: string;
  city: string | null;
  headQuarters: string;
  territory: string | null;
  normValue: string;
  category: string | null;
  districtName: string | null;
  address: string;
  gstNo: string;
  userName: string;
  designation: string;
  dlNo: string;
  divisions: string[];
}
