import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; // Import Router
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master-side-bar',
  imports: [FontAwesomeModule, CommonModule, MatChipsModule, RouterLink],
  templateUrl: './master-side-bar.component.html',
  styleUrl: './master-side-bar.component.css',
})
export class MasterSideBarComponent {
  showOptions = false; // Initially hidden
  hoveredItem: string | null = null; // Track hovered item
  faSearch = faSearch;

  constructor(private router: Router) {} // Inject Router

  // Master list with routes
  list = [
    { name: 'Basic Details', route: '/master' },
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

  //! Basic Details Options--
  activeChip_Basic: string = 'Company';
  BasicDetails_label = [
    { name: 'Company', route: '/master/basic_details/company' },
    { name: 'Division', route: '/master/basic_details/division' },
    { name: 'Designation', route: '/master/basic_details/designation' },
    { name: 'Head Quarters', route: '/master/basic_details/head-quarters' },
    { name: 'Work Type', route: '/master/basic_details/work-type' },
    { name: 'HO User', route: '/master/basic_details/ho-user' },
    { name: 'Currency', route: '/master/basic_details/currency' },
  ];

  //! Geography
  activeChip_Geography: string = 'Area';
  Geography_label = [
    { name: 'Area', route: '/master/geography/area' },
    { name: 'Zone', route: '/master/geography/zone' },
    { name: 'Territory', route: '/master/geography/territory' },
    { name: 'District', route: '/master/geography/district' },
    { name: 'Town', route: '/master/geography/town' },
  ];

  //! Product
  activeChip_Product: string = 'Product detail';
  Product_label = [
    { name: 'Product detail', route: '#' },
    { name: 'Category', route: '#' },
    { name: 'Brand', route: '#' },
    { name: 'UOM', route: '#' },
    { name: 'Tax Allocation', route: '#' },
    { name: 'Rate Entry Statewise', route: '#' },
    { name: 'POP Material', route: '#' },
    { name: 'Rate Card Fixation', route: '#' },
    { name: 'Fixed Rate Card', route: '#' },
  ];
}
