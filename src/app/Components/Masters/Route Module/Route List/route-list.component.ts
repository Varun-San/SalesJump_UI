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
  selector: 'app-route-list',
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
  templateUrl: './route-list.component.html',
  styleUrl: './route-list.component.css',
})
export class RouteListComponent {
  constructor(private router: Router) {}

  routeList: Route[] = [];

  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  selectedRouteListDetails: {
    routeListDetails: Route;
    index: number;
  } | null = null;

  // Called when menu button clicked on a row
  openMenu(route: Route, index: number) {
    this.selectedRouteListDetails = { routeListDetails: route, index };
  }

  // Handle menu actions
  handleMenuAction(action: string) {
    if (!this.selectedRouteListDetails) return;

    switch (action) {
      case 'edit':
        this.editRouteList(
          this.selectedRouteListDetails.routeListDetails,
          this.selectedRouteListDetails.index
        );
        break;
      case 'deactivate':
        this.toggleRouteStatus();
        break;
      default:
        console.warn('Unknown action:', action);
    }
  }

  // Navigate to the Add/Edit page
  editRouteList(routeListDetails: Route, index: number) {
    this.router.navigate(['/master/route/route-list/add-route-list'], {
      state: { route: routeListDetails, index },
    });
  }

  // Toggle Active/Inactive status and persist it
  toggleRouteStatus() {
    if (!this.selectedRouteListDetails) return;

    const data = sessionStorage.getItem('Route-List-Data');
    let routeListArray = data ? JSON.parse(data) : [];

    const index = this.selectedRouteListDetails.index;
    if (routeListArray[index]) {
      const currentStatus = routeListArray[index].status || 'Active';
      routeListArray[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('Route-List-Data', JSON.stringify(routeListArray));
      this.loadRouteList();
    }

    this.selectedRouteListDetails = null;
  }

  // Load route list from sessionStorage
  loadRouteList() {
    const stored = sessionStorage.getItem('Route-List-Data');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.routeList = dataArray.map((route: any) => ({
          routeName: route.routeName || '',
          distance: route.distance || '',
          target: route.target || '',
          productionPercentage: route.productionPercentage || '',
          routePopulation: route.routePopulation || '',
          territory: route.territory || null,
          allowanceType: route.allowanceType || null,
          town: route.town || null,
          distributor: route.distributor || [],
          subDivision: route.subDivision || [],
          status: route.status || 'Active',
          fieldForce: route.fieldForce || 'Piece',
        }));
      } catch (e) {
        console.warn('Invalid data in sessionStorage for Route-List-Data');
      }
    }
  }

  ngOnInit() {
    this.loadRouteList();
  }

  // Filter logic
  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

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

interface Route {
  routeName: string;
  distance: string;
  target: string;
  productionPercentage: string;
  routePopulation: string;
  territory: string | null;
  allowanceType: string | null;
  town: string | null;
  distributor: string[];
  subDivision: string[];
  status?: string;
  fieldForce: string;
}
