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
  selector: 'app-division',
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
  templateUrl: './division.component.html',
  styleUrl: './division.component.css',
})
export class DivisionComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  handleMenuAction(action: string) {
    // Ensure selectedDivision exists before performing any action
    if (!this.selectedDivision) return;

    switch (action) {
      case 'edit':
        // Call editDivision with selected division data
        this.editDivision(
          this.selectedDivision.division,
          this.selectedDivision.index
        );
        break;

      case 'deactivate':
        // Deactivate or Activate the division status
        this.onMenuAction('deactivate'); // Or 'activate' depending on your logic
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  divisionList: {
    divisionName: string;
    divisionPrefix: string;
    productWiseCount: number;
    userWiseCount: number;
    status: string;
  }[] = [];

  selectedDivision: { division: any; index: number } | null = null;

  constructor(private router: Router) {}

  editDivision(division: any, index: number) {
    this.router.navigate(['master/basic_details/add-division'], {
      state: { division, index },
    });
  }

  ngOnInit() {
    this.loadDivisions();
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

  // This will load the updated division list from sessionStorage
  loadDivisions() {
    const data = sessionStorage.getItem('add-division');
    this.divisionList = data ? JSON.parse(data) : [];
  }

  // Handle the Deactivate/Activate action
  onMenuAction(action: string) {
    if (!this.selectedDivision) return;

    const data = sessionStorage.getItem('add-division');
    let divisions = data ? JSON.parse(data) : [];

    const index = this.selectedDivision.index;

    if (action === 'deactivate' && divisions[index]) {
      const currentStatus = divisions[index].status || 'Active'; // Default to 'Active' if missing
      divisions[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('add-division', JSON.stringify(divisions));

      this.loadDivisions(); // Refresh the division list after the update
    }

    this.selectedDivision = null; // Reset the selected division
  }
}
