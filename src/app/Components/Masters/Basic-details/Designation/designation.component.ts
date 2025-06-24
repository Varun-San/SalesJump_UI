import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-designation',
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
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ICONS & FLAGS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  faSearch = faSearch;
  showFilterPopup = false;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FILTERS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DATA STRUCTURES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  designationList: {
    shortName: string;
    designation: string;
    type: string;
    userWiseCount: string;
    status: string;
  }[] = [];

  selectedDesignation: { designation: any; index: number } | null = null;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private router: Router) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT METHOD <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  ngOnInit() {
    this.loadDesignations();
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LOAD DESIGNATION LIST <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  loadDesignations() {
    const data = sessionStorage.getItem('add-designation');
    this.designationList = data ? JSON.parse(data) : [];
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EDIT ACTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editDesignation(designation: any, index: number) {
    this.router.navigate(['master/basic_details/designation/add-designation'], {
      state: { designation, index },
    });
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU ACTION HANDLER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  handleMenuAction(action: string) {
    if (!this.selectedDesignation) return;

    switch (action) {
      case 'edit':
        this.editDesignation(
          this.selectedDesignation.designation,
          this.selectedDesignation.index
        );
        break;

      case 'deactivate':
        this.toggleDesignationStatus(this.selectedDesignation.index);
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TOGGLE DESIGNATION STATUS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  toggleDesignationStatus(index: number) {
    const stored = sessionStorage.getItem('add-designation');
    let designations = stored ? JSON.parse(stored) : [];

    const currentStatus = designations[index].status || 'Active';
    designations[index].status =
      currentStatus === 'Active' ? 'Inactive' : 'Active';

    sessionStorage.setItem('add-designation', JSON.stringify(designations));
    this.loadDesignations();
    this.selectedDesignation = null;
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FILTER LOGIC <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU TRIGGER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  openMenu(designation: any, index: number) {
    this.selectedDesignation = { designation, index };
  }
}
