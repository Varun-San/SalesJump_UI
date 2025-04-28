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
  selector: 'app-geography',
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
  templateUrl: './geography.component.html',
  styleUrl: './geography.component.css',
})
export class GeographyComponent {
  // ! TABS CONTROL FOR THE NAV
  tabItems = [
    {
      label: 'Area',
      path: '/master/geography/area',
    },
    {
      label: 'Zone',
      path: '/master/geography/zone',
    },
    {
      label: 'Territory',
      path: '/master/geography/territory',
    },
    {
      label: 'District',
      path: '/master/geography/district',
    },
    {
      label: 'Town',
      path: '/master/geography/town',
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
  tabs = ['Area', 'Zone', 'Territory', 'District', 'Town'];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
