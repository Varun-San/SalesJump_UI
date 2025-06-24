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

@Component({
  selector: 'app-head-quarters',
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
    RouterOutlet,
  ],
  templateUrl: './head-quarters.component.html',
  styleUrls: ['./head-quarters.component.css'],
})
export class HeadQuartersComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ICONS & FLAGS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  faSearch = faSearch;
  showFilterPopup = false;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FILTERS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DATA STRUCTURE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  headQuartersList: {
    id: string;
    name: string;
    type: string;
    latitude: string;
    longitude: string;
    status: string;
  }[] = [];

  selectedHQ: { hq: any; index: number } | null = null;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  menuOptions = [
    {
      label: 'Edit Details',
      action: 'edit',
      route: '/master/basic_details/add-headquarters',
    },
    {
      label: 'Deactivate',
      action: 'deactivate',
      route: null,
    },
    {
      label: 'Menu Rights',
      action: 'menu-rights',
      route: '/master/basic_details/menu-rights',
    },
  ];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private router: Router) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ON INIT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  ngOnInit() {
    const storedHQ = sessionStorage.getItem('headQuartersData');
    if (storedHQ) {
      try {
        const parsed = JSON.parse(storedHQ);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];
        this.headQuartersList = dataArray.map((hq: any, index: number) => ({
          id: `HQ ${101 + index}`,
          name: hq.name,
          type: hq.type,
          latitude: hq.latitude,
          longitude: hq.longitude,
          status: hq.status || 'Active',
        }));
      } catch (e) {
        console.warn('Invalid headquarters data in sessionStorage');
      }
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FILTER ACTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU HANDLER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  openMenu(hq: any, index: number) {
    this.selectedHQ = { hq, index };
  }

  onMenuAction(action: string) {
    if (!this.selectedHQ) return;

    const hq = this.selectedHQ.hq;

    switch (action) {
      case 'edit':
        this.router.navigate(['/master/basic_details/add-headquarters'], {
          state: { hq, index: this.selectedHQ.index },
        });
        break;

      case 'deactivate':
        hq.status = hq.status === 'Active' ? 'Inactive' : 'Active';
        this.updateSessionStorage();
        break;

      case 'menu-rights':
        this.router.navigate(
          ['/master/basic_details/designation/menu-rights'],
          {
            state: { hq },
          }
        );
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> STORAGE UPDATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  private updateSessionStorage() {
    const updatedData = this.headQuartersList.map((hq) => ({
      name: hq.name,
      type: hq.type,
      latitude: hq.latitude,
      longitude: hq.longitude,
      status: hq.status,
    }));

    sessionStorage.setItem('headQuartersData', JSON.stringify(updatedData));
  }
}
