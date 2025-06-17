import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-retailer-category',
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    RouterLink,
    MatTooltipModule,
    RouterOutlet,
  ],
  templateUrl: './retailer-category.component.html',
  styleUrl: './retailer-category.component.css',
})
export class RetailerCategoryComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  CategoryList: {
    category_Code: string;
    category_Name: string;
    category_No_Of_Customers: number;
    status: string;
  }[] = [];

  selectedCategory: { category: any; index: number } | null = null;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCategoryTypes();
  }

  // Load categories from sessionStorage
  loadCategoryTypes() {
    const stored = sessionStorage.getItem('add_Category');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.CategoryList = dataArray.map((category: any) => ({
          category_Code: category.category_Code || '',
          category_Name: category.category_Name || '',
          category_No_Of_Customers: category.category_No_Of_Customer || 0,
          status: category.status || 'Active',
        }));

        console.log('Loaded categories:', this.CategoryList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for category data', e);
      }
    }
  }

  // Handle menu action (Edit or Deactivate)
  handleMenuAction(action: string) {
    if (!this.selectedCategory) return;

    switch (action) {
      case 'edit':
        this.editCategory(
          this.selectedCategory.category,
          this.selectedCategory.index
        );
        break;
      case 'deactivate':
        this.toggleCategoryStatus();
        break;
      default:
        console.warn('Unknown action:', action);
    }
  }

  // Navigate to edit page with category data
  editCategory(categoryObj: any, index: number) {
    this.router.navigate(
      ['/master/retailer/retailer-category/add-category-retailer'],
      {
        state: { category: categoryObj, index },
      }
    );
  }

  // Toggle the category status between Active and Inactive
  toggleCategoryStatus() {
    if (!this.selectedCategory) return;

    const data = sessionStorage.getItem('add_Category');
    let categories = data ? JSON.parse(data) : [];

    const index = this.selectedCategory.index;
    if (categories[index]) {
      const currentStatus = categories[index].status || 'Active';
      categories[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('add_Category', JSON.stringify(categories));
      this.loadCategoryTypes();
    }

    this.selectedCategory = null;
  }

  // Set selected category and index for the menu actions
  openMenu(categoryObj: any, index: number) {
    this.selectedCategory = { category: categoryObj, index };
  }

  // Toggle the filter popup visibility
  toggleFilterPopup() {
    this.showFilterPopup = !this.showFilterPopup;
  }

  // Apply the filters
  applyFilters() {
    this.activeFilters = { ...this.tempFilters };
    this.showFilterPopup = false;
  }

  // Cancel the filter changes
  cancelFilter() {
    this.tempFilters = { ...this.activeFilters };
    this.showFilterPopup = false;
  }

  // Clear a specific filter
  clearFilter(type: 'status' | 'role') {
    this.activeFilters[type] = '';
    this.tempFilters[type] = '';
  }
}
