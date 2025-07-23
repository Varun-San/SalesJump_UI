import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; // Import Router
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-uploads',
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule,
    MatChipsModule,
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './uploads.component.html',
  styleUrl: './uploads.component.css',
})
export class UploadsComponent {
  // ! TABS CONTROL FOR THE NAV
  tabItems = [
    {
      label: 'Proudct Upload',
      path: 'product-upload',
    },
    {
      label: 'Proudct Rate Upload',
      path: 'product-rate-upload',
    },
    {
      label: 'Distributor Upload',
      path: 'distributor-upload',
    },
    {
      label: 'Route Upload',
      path: 'route-upload',
    },
    {
      label: 'Retailer Upload',
      path: 'retailer-upload',
    },
    {
      label: 'Target Upload',
      path: 'target-upload',
    },
    {
      label: 'Primary Target Upload',
      path: 'primary-target-upload',
    },
    {
      label: 'Pending Bills Upload',
      path: 'pending-bills-upload',
    },
    {
      label: 'Master Upload',
      path: 'master-upload',
    },
    {
      label: 'Bulk User Upload',
      path: 'bulk-user-upload',
    },
    {
      label: 'Tour Plan Upload',
      path: 'tour-plan-upload',
    },
  ];

  // ?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  showOptions = false; // Initially hidden
  hoveredItem: string | null = null; // Track hovered item

  constructor(private router: Router) {} // Inject Router

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Tabs

  // Master list merged into tabs
  tabs = [
    'Proudct Upload',
    'Proudct Rate Upload',
    'Distributor Upload',
    'Route Upload',
    'Retailer Upload',
    'Target Upload',
    'Primary Target Upload',
    'Pending Bills Upload',
    'Master Upload',
    'Bulk User Upload',
    'Tour Plan Upload',
  ];

  activeTab = this.tabs[0];
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
