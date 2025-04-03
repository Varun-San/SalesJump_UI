import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-masters',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './masters.component.html',
  styleUrl: './masters.component.css',
})
export class MastersComponent {
  showOptions = false; // Initially hidden
  hoveredItem: string | null = null; // Track hovered item
  faSearch = faSearch;

  constructor(private router: Router) {} // Inject Router

  // Master list with routes
  list = [
    { name: 'Basic Details', route: '/masters' },
    { name: 'Geography', route: '/masters' },
    { name: 'Merchandising', route: '/masters' },
    { name: 'Product', route: '/masters' },
    { name: 'Employee', route: '/masters' },
    { name: 'Retailer', route: '/masters' },
    { name: 'Super Stockiest', route: '/masters' },
    { name: 'Route', route: '/masters' },
    { name: 'Tax', route: '/masters' },
    { name: 'HO Creation', route: '/masters' },
    { name: 'Competitor', route: '/masters' },
    { name: 'Van Sales', route: '/masters' },
  ];

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Tabs

  // Master list merged into tabs
  tabs = [
    'Basic Details',
    'Geography',
    'Merchandising',
    'Product',
    'Employee',
    'Retailer',
    'Super Stockist',
    'Route',
    'Tax',
    'HO Creation',
    'Competitor',
    'Van Sales',
  ];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
