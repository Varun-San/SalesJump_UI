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
  ],
  templateUrl: './division.component.html',
  styleUrl: './division.component.css',
})
export class DivisionComponent {
  constructor(private router: Router) {}
  faSearch = faSearch;
  //! Filter Option
  showFilterPopup = false;

  divisionList: {
    divisionName: string;
    divisionPrefix: string;
    productWiseCount: number;
    userWiseCount: number;
    status: string;
  }[] = [];

  editDivision(division: any, index: number) {
    this.router.navigate(['master/basic_details/add-division'], {
      state: { division, index },
    });
  }
  ngOnInit() {
    this.loadDivisions();
  }

  loadDivisions() {
    const stored = sessionStorage.getItem('add-division');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.divisionList = dataArray.map((div: any, index: number) => ({
          divisionName: div.divisionName || '',
          divisionPrefix: div.divisionPrefix || '',
          productWiseCount: div.productWiseCount || 0,
          userWiseCount: div.userWiseCount || 0,
          status: 'Active',
        }));

        console.log('Loaded Division List:', this.divisionList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for division');
      }
    }
  }

  // Temporary selections (before Apply)
  tempFilters = {
    status: '',
    role: '',
  };

  // Final applied filters
  activeFilters = {
    status: '',
    role: '',
  };

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
