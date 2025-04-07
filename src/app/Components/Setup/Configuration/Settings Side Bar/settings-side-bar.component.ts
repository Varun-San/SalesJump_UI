import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; // Import Router
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-settings-side-bar',
  imports: [
    FontAwesomeModule,
    CommonModule,
    MatChipsModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './settings-side-bar.component.html',
  styleUrl: './settings-side-bar.component.css',
})
export class SettingsSideBarComponent {
  showSidebar = true;
  constructor(private router: Router) {} // Inject Router

  showOptions = false; // Initially hidden
  hoveredItem: string | null = null; // Track hovered item
  faSearch = faSearch;

  // Master list with routes
  list = [{ name: 'Configuration', route: '/masters' }];

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  // Master list merged into tabs
  tabs = ['Configuration'];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  //! Configuration Options--
  activeChip_Configuration: string = 'Company';
  Configuration_Label = [
    { name: 'General Settings', route: 'configuration/general-settings' },
    { name: 'UserWise Settings', route: 'configuration/user-settings' },
  ];
}
