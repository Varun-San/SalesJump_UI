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
  selector: 'app-basic-details',
  standalone: true,
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
  templateUrl: './basic-details.component.html',
  styleUrl: './basic-details.component.css',
})
export class BasicDetailsComponent {
  // ! TABS CONTROL FOR THE NAV
  tabItems = [
    {
      label: 'Company',
      path: '/master/basic_details/company',
    },
    {
      label: 'Division',
      path: '/master/basic_details/division',
    },
    {
      label: 'Designation',
      path: '/master/basic_details/designation',
    },
    {
      label: 'Head Quarters',
      path: '/master/basic_details/head-quarters',
    },
    {
      label: 'Work Type',
      path: '/master/basic_details/work-type',
    },
    {
      label: 'HO User',
      path: '/master/basic_details/ho-user',
    },
    {
      label: 'Currency',
      path: '/master/basic_details/currency',
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
    'Company',
    'Division',
    'Designation',
    'Head Quarters',
    'Work Type',
    'HO User',
    'currency',
  ];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
