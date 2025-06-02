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
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  workTypeList: {
    workTypeCode: string;
    workType: string;
    workTypeShortName: string;
    placeInvolved: string;
    status: string;
  }[] = [];

  selectedWorkType: { workType: any; index: number } | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadWorkTypes();
  }

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

  openMenu(workType: any, index: number) {
    this.selectedWorkType = { workType, index };
  }

  onMenuAction(action: string) {
    if (!this.selectedWorkType) return;

    const { workType, index } = this.selectedWorkType;

    switch (action) {
      case 'edit':
        this.router.navigate(['/master/basic_details/add-work-type'], {
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
