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
  selector: 'app-reatiler',
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
  templateUrl: './reatiler.component.html',
  styleUrl: './reatiler.component.css',
})
export class ReatilerComponent {
  // ! TABS CONTROL FOR THE NAV
  tabItems = [
    {
      label: 'Outlet Type',
      path: '/master/retailer/retailer-outlet-type',
    },
    {
      label: 'Class',
      path: '/master/retailer/retailer-class',
    },
    {
      label: 'Retailer Creation',
      path: '/master/retailer/retailer-creation',
    },
    {
      label: 'Category',
      path: '/master/retailer/retailer-category',
    },
  ];

  // ?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  showOptions = false;
  hoveredItem: string | null = null;

  constructor(private router: Router) {} // Inject Router

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Tabs

  // Master list merged into tabs
  tabs = ['Outlet Type', 'Class', 'Retailer Creation', 'Category'];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
