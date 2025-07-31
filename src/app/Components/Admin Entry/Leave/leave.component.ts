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

@Component({
  selector: 'app-leave',
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
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.css',
})
export class LeaveComponent {
  // ! TABS CONTROL FOR THE NAV
  tabItems = [
    {
      label: 'Leave Entry',
      path: '/entry/leave/leave_entry',
    },
    {
      label: 'Leave Eligibility',
      path: '/entry/leave/leave_eligibility',
    },
  ];

  // ?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  showOptions = false; // Initially hidden
  hoveredItem: string | null = null;

  constructor(private router: Router) {}

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Master list merged into tabs
  tabs = ['Leave Entry', 'Leave Eligibility'];

  activeTab = this.tabs[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
