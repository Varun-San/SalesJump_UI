import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; // Import Router
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-masters',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    MatChipsModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './masters.component.html',
  styleUrl: './masters.component.css',
})
export class MastersComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  showOptions = false; // Initially hidden
  hoveredItem: string | null = null; // Track hovered item
  faSearch = faSearch;

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

  //! Basic Details Options--
  activeChip_Basic: string = 'Company';
  BasicDetails_label = [
    { name: 'Company', route: 'basic_details' },
    { name: 'Division', route: 'division' },
    { name: 'Designation', route: 'designation' },
    { name: 'Head Quarters', route: 'head-quarters' },
    { name: 'Work Type', route: 'work-type' },
    { name: 'HO User', route: 'ho-user' },
  ];

  //! Geography
  activeChip_Geography: string = 'Area';
  Geography_label = [
    { name: 'Area', route: '#' },
    { name: 'Zone', route: '#' },
    { name: 'Territory', route: '#' },
    { name: 'District', route: '#' },
    { name: 'Town', route: '#' },
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
