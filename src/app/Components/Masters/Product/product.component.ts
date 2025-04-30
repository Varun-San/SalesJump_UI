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
  selector: 'app-product',
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
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // ! TABS CONTROL FOR THE NAV
  tabItems = [
    {
      label: 'Product Details',
      path: '/master/product/product-details',
    },
    {
      label: 'Category',
      path: '/master/product/category',
    },
    {
      label: 'Brand',
      path: '/master/product/brand',
    },
    {
      label: 'UOM',
      path: '/master/product/uom',
    },
    {
      label: 'Tax Allocation',
      path: '/master/product/tax-allocation',
    },
    {
      label: 'Rate Entry',
      path: '/master/product/rate-entry',
    },
    {
      label: 'POP Material',
      path: '/master/product/pop-material',
    },
    {
      label: 'Rate Card',
      path: '/master/product/rate-card',
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
  tabs = [
    'Product Details',
    'Category',
    'Brand',
    'UOM',
    'Tax Allocation',
    'Rate Entry',
    'POP Material',
    'Rate Card',
  ];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
