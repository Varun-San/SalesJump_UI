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
  selector: 'app-gamification',
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
  templateUrl: './gamification.component.html',
  styleUrl: './gamification.component.css',
})
export class GamificationComponent {
  // ! TABS CONTROL FOR THE NAV
  tabItems = [
    {
      label: 'Competitions',
      path: '/master/gamification/competitions',
    },
    {
      label: 'Formula',
      path: '/master/gamification/formula',
    },
    {
      label: 'Rewards',
      path: '/master/gamification/rewards',
    },
    {
      label: 'Levels',
      path: '/master/gamification/levels',
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
  tabs = ['Competitions', 'Formula', 'Rewards', 'Levels'];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
