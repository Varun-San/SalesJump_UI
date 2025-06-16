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
  selector: 'app-class',
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
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  ClassList: {
    class_Code: string;
    class_Name: string;
    class_No_Of_Customers: number;
    status: string;
  }[] = [];

  selectedClass: { class: any; index: number } | null = null;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadClassTypes();
  }

  // Load class types from sessionStorage
  loadClassTypes() {
    const stored = sessionStorage.getItem('add_Class');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.ClassList = dataArray.map((classObj: any) => ({
          class_Code: classObj.class_Code || '',
          class_Name: classObj.class_Name || '',
          class_No_Of_Customers: classObj.class_No_Of_Customer || 0,
          status: classObj.status || 'Active',
        }));

        console.log('Loaded class Types:', this.ClassList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for class data', e);
      }
    }
  }

  // Handle menu action (Edit or Deactivate)
  handleMenuAction(action: string) {
    if (!this.selectedClass) return;

    switch (action) {
      case 'edit':
        this.editClass(this.selectedClass.class, this.selectedClass.index);
        break;
      case 'deactivate':
        this.toggleClassStatus();
        break;
      default:
        console.warn('Unknown action:', action);
    }
  }

  // Navigate to edit page with class data
  editClass(classObj: any, index: number) {
    this.router.navigate(
      ['/master/retailer/retailer-class/add-class-retailer'],
      {
        state: { class: classObj, index },
      }
    );
  }

  // Toggle the class status between Active and Inactive
  toggleClassStatus() {
    if (!this.selectedClass) return;

    const data = sessionStorage.getItem('add_Class');
    let classes = data ? JSON.parse(data) : [];

    const index = this.selectedClass.index;
    if (classes[index]) {
      const currentStatus = classes[index].status || 'Active';
      classes[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('add_Class', JSON.stringify(classes));
      this.loadClassTypes();
    }

    this.selectedClass = null;
  }

  // Set selected class and index for the menu actions
  openMenu(classObj: any, index: number) {
    this.selectedClass = { class: classObj, index };
  }

  // Toggle the filter popup visibility
  toggleFilterPopup() {
    this.showFilterPopup = !this.showFilterPopup;
  }

  // Apply the filters
  applyFilters() {
    this.activeFilters = { ...this.tempFilters };
    this.showFilterPopup = false;
  }

  // Cancel the filter changes
  cancelFilter() {
    this.tempFilters = { ...this.activeFilters };
    this.showFilterPopup = false;
  }

  // Clear a specific filter
  clearFilter(type: 'status' | 'role') {
    this.activeFilters[type] = '';
    this.tempFilters[type] = '';
  }
}
