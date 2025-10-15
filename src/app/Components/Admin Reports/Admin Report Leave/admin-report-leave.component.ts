import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; // Import Router
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Path } from 'leaflet';

@Component({
  selector: 'app-admin-report-leave',
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
  templateUrl: './admin-report-leave.component.html',
  styleUrl: './admin-report-leave.component.css',
})
export class AdminReportLeaveComponent {
  // ! TABS CONTROL FOR THE NAV
  tabItems = [
    {
      label: 'Availability Status',
      path: '/admin-reports/admin-reports-leave/availability-status',
    },
    {
      label: 'Leave Card',
      path: '/admin-reports/admin-reports-leave/leave-card',
    },
    {
      label: 'Leave Status',
      path: '/admin-reports/admin-reports-leave/leave-status',
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
  tabs = ['Availability Status', 'Leave Card', 'Leave Status'];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
