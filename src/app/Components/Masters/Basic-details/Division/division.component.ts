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

interface Division {
  divisionName: string;
  divisionPrefix: string;
  productWiseCount: number;
  userWiseCount: number;
  status: string;
}

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
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ICONS & FLAGS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  faSearch = faSearch;
  showFilterPopup = false;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FILTERS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENUS & OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  selectedDivision: { division: any; index: number } | null = null;
  selectedHQ: any = null;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DIVISION DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  divisionList: Division[] = [];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private router: Router) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT METHOD <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  ngOnInit() {
    this.loadDivisions();
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LOAD DIVISIONS FROM SESSION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  loadDivisions(): void {
    const data = sessionStorage.getItem('add-division');
    this.divisionList = data ? JSON.parse(data) : [];
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> OPEN MENU <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  openMenu(hq: any): void {
    this.selectedHQ = hq;
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HANDLE MENU ACTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  handleMenuAction(action: string): void {
    if (!this.selectedDivision) return;

    switch (action) {
      case 'edit':
        this.editDivision(
          this.selectedDivision.division,
          this.selectedDivision.index
        );
        break;

      case 'deactivate':
        this.onMenuAction('deactivate');
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATE TO EDIT PAGE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editDivision(division: any, index: number): void {
    this.router.navigate(['master/basic_details/division/add-division'], {
      state: { division, index },
    });
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TOGGLE DIVISION STATUS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  onMenuAction(action: string): void {
    if (!this.selectedDivision) return;

    const data = sessionStorage.getItem('add-division');
    let divisions = data ? JSON.parse(data) : [];

    const index = this.selectedDivision.index;

    if (action === 'deactivate' && divisions[index]) {
      const currentStatus = divisions[index].status || 'Active';
      divisions[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('add-division', JSON.stringify(divisions));
      this.loadDivisions(); // Refresh UI
    }

    this.selectedDivision = null;
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FILTER LOGIC <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  toggleFilterPopup(): void {
    this.showFilterPopup = !this.showFilterPopup;
  }

  applyFilters(): void {
    this.activeFilters = { ...this.tempFilters };
    this.showFilterPopup = false;
  }

  cancelFilter(): void {
    this.tempFilters = { ...this.activeFilters };
    this.showFilterPopup = false;
  }

  clearFilter(type: 'status' | 'role'): void {
    this.activeFilters[type] = '';
    this.tempFilters[type] = '';
  }
}
