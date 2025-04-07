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
  header_Label = [
    { name: 'Company' },
    { name: 'Division' },
    { name: 'Designation' },
    { name: 'Head Quarters' },
    { name: 'Work Type' },
    { name: 'HO User' },
  ];

  showOptions = false; // Initially hidden
  hoveredItem: string | null = null; // Track hovered item
  faSearch = faSearch;

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
  ];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
