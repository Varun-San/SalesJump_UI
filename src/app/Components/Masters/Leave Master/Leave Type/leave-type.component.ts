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
  selector: 'app-leave-type',
  standalone: true,
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
  templateUrl: './leave-type.component.html',
  styleUrl: './leave-type.component.css',
})
export class LeaveTypeComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  LeaveList: {
    leave_short_Name: string;
    leave_Name: string;
    status: string;
  }[] = [];

  selectedLeave: { class: any; index: number } | null = null;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadLeaveTypes();
  }

  // Load leave types from sessionStorage
  loadLeaveTypes() {
    const stored = sessionStorage.getItem('add_Leave');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.LeaveList = dataArray.map((leaveObj: any) => ({
          leave_short_Name: leaveObj.leave_short_Name || '',
          leave_Name: leaveObj.leave_Name || '',
          status: leaveObj.status || 'Active', // Add default if missing
        }));

        console.log('Loaded Leave Types:', this.LeaveList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for leave data', e);
      }
    }
  }

  // Handle menu action (Edit or Deactivate)
  handleMenuAction(action: string) {
    if (!this.selectedLeave) return;

    switch (action) {
      case 'edit':
        this.editLeave(this.selectedLeave.class, this.selectedLeave.index);
        break;
      case 'deactivate':
        this.toggleLeaveStatus();
        break;
    }
  }

  // Navigate to edit page with leave data
  editLeave(leaveObj: any, index: number) {
    this.router.navigate(['/master/leave-master/leave-type/add-leave-type'], {
      state: { class: leaveObj, index },
    });
  }

  // Toggle status between Active/Inactive
  toggleLeaveStatus() {
    if (!this.selectedLeave) return;

    const data = sessionStorage.getItem('add_Leave');
    let leaves = data ? JSON.parse(data) : [];

    const index = this.selectedLeave.index;
    if (leaves[index]) {
      const currentStatus = leaves[index].status || 'Active';
      leaves[index].status = currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('add_Leave', JSON.stringify(leaves));
      this.loadLeaveTypes(); // reload list
    }

    this.selectedLeave = null;
  }

  // Set selected leave object for menu

  openMenu(leaveObj: any, index: number) {
    this.selectedLeave = { class: leaveObj, index };
  }

  // Filters (if needed)
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
