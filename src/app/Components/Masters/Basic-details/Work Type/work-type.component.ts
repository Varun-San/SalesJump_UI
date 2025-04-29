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
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-work-type',
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
  ],
  templateUrl: './work-type.component.html',
  styleUrl: './work-type.component.css',
})
export class WorkTypeComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', route: null },
    { label: 'Deactivate', route: null },
  ];

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  workTypeList: {
    workTypeCode: string;
    workType: string;
    workTypeShortName: string;
    level: string;
    status: string;
  }[] = [];

  ngOnInit() {
    const stored = sessionStorage.getItem('add-Work-Type');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.workTypeList = dataArray.map((work: any, index: number) => ({
          workTypeCode: `WT-${100 + index}`,
          workType: work.workType || '',
          workTypeShortName: work.workTypeShortName || '',
          level: work.placeInvolved || '',
          status: 'Active',
        }));

        console.log(this.workTypeList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for work type');
      }
    }
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
  onMenuAction(action: string) {
    if (!this.selectedHQ) return;

    if (action === 'Deactivate') {
      this.selectedHQ.status =
        this.selectedHQ.status === 'Active' ? 'Inactive' : 'Active';
    }
  }
}
