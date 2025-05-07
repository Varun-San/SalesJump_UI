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
  selector: 'app-category',
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
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  handleMenuAction(action: string) {
    // Ensure selectedCategory exists before performing any action
    if (!this.selectedCategory) return;

    switch (action) {
      case 'edit':
        // Call editCategory with selected category data
        this.editCategory(
          this.selectedCategory.category,
          this.selectedCategory.index
        );
        break;

      case 'deactivate':
        // Deactivate or Activate the category status
        this.onMenuAction('Deactivate'); // or 'Activate' depending on your logic
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  categoryList: {
    category_Code: string;
    category_Name: string;
    category_Divisions: string;
    category_No_of_Prdts: string;
    status: string;
  }[] = [];

  selectedCategory: { category: any; index: number } | null = null;

  constructor(private router: Router) {}

  editCategory(category: any, index: number) {
    this.router.navigate(['/master/product/category/add-category'], {
      state: { category, index },
    });
  }

  ngOnInit() {
    const stored = sessionStorage.getItem('add_Category');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.categoryList = dataArray.map((category: any) => ({
          category_Code: category.category_Code || '',
          category_Name: category.category_Name || '',
          category_Divisions: category.category_Divisions || '',
          category_No_of_Prdts: category.category_No_of_Prdts || '',
          status: 'Active', // Default status
        }));

        console.log('Loaded Categories:', this.categoryList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for product-data');
      }
    }
  }

  toggleFilterPopup() {
    this.showFilterPopup = !this.showFilterPopup;
  }

  applyFilters() {
    this.activeFilters = { ...this.tempFilters };
    this.showFilterPopup = false;
  }

  cancelFilter() {
    this.tempFilters = { ...this.activeFilters };
    this.showFilterPopup = false;
  }

  clearFilter(type: 'status' | 'role') {
    this.activeFilters[type] = '';
    this.tempFilters[type] = '';
  }

  selectedHQ: any = null;

  openMenu(hq: any) {
    this.selectedHQ = hq;
  }

  loadCategories() {
    const data = sessionStorage.getItem('add_Category');
    this.categoryList = data ? JSON.parse(data) : [];
  }

  onMenuAction(action: string) {
    if (!this.selectedCategory) return;

    const data = sessionStorage.getItem('add_Category');
    let categories = data ? JSON.parse(data) : [];

    const index = this.selectedCategory.index;

    if (action === 'Deactivate' && categories[index]) {
      const currentStatus = categories[index].status || 'Active'; // default to Active if missing
      categories[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('add_Category', JSON.stringify(categories));

      this.loadCategories();
    }

    this.selectedCategory = null;
  }
}
