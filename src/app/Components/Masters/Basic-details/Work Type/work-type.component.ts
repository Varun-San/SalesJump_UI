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
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-work-type',
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
  templateUrl: './work-type.component.html',
  styleUrls: ['./work-type.component.css'],
})
export class WorkTypeComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ICONS & UI STATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  faSearch = faSearch;
  showFilterPopup = false;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FILTERS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> WORK TYPE DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  workTypeList: {
    workTypeCode: string;
    workType: string;
    workTypeShortName: string;
    placeInvolved: string;
    status: string;
  }[] = [];

  selectedWorkType: { workType: any; index: number } | null = null;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private router: Router) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LIFECYCLE HOOK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  ngOnInit() {
    this.loadWorkTypes();
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LOAD WORK TYPES FROM STORAGE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  loadWorkTypes() {
    const stored = sessionStorage.getItem('add-work-type');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        this.workTypeList = Array.isArray(parsed) ? parsed : [parsed];
      } catch (e) {
        console.warn('Invalid data in sessionStorage for work type');
      }
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU OPEN & ACTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  openMenu(workType: any, index: number) {
    this.selectedWorkType = { workType, index };
  }

  onMenuAction(action: string) {
    if (!this.selectedWorkType) return;

    const { workType, index } = this.selectedWorkType;

    switch (action) {
      case 'edit':
        this.router.navigate(['/master/basic_details/work-type/add-work-type'], {
          state: { workType, index },
        });
        break;

      case 'deactivate':
        this.toggleStatus(index);
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TOGGLE STATUS (ACTIVE / INACTIVE) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  toggleStatus(index: number) {
    const stored = sessionStorage.getItem('add-work-type');
    let workTypes = stored ? JSON.parse(stored) : [];

    const currentStatus = workTypes[index].status || 'Active';
    workTypes[index].status =
      currentStatus === 'Active' ? 'Inactive' : 'Active';

    sessionStorage.setItem('add-work-type', JSON.stringify(workTypes));
    this.loadWorkTypes();
    this.selectedWorkType = null;
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FILTER POPUP MANAGEMENT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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
