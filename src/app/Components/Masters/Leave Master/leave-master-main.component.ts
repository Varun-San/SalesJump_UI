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
  selector: 'app-leave-master-main',
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
  templateUrl: './leave-master-main.component.html',
  styleUrl: './leave-master-main.component.css',
})
export class LeaveMasterMainComponent {
  // ! TABS CONTROL FOR THE NAV
  tabItems = [
    {
      label: 'Leave Master',
      path: '/master/leave-master/leave-type',
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

  // Master list merged into tabs
  tabs = ['Leave Master'];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
