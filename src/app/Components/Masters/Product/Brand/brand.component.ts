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
  selector: 'app-brand',
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
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  handleMenuAction(action: string) {
    // Ensure SelectedBrand exists before performing any action
    if (!this.selectedBrand) return;

    switch (action) {
      case 'edit':
        // Call editCategory with selected category data
        this.editBrand(this.selectedBrand.brand, this.selectedBrand.index);
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

  brandList: {
    brand_Code: string;
    brand_Name: string;
    brand_Category: string;
    brand_Division: string;
    brand_No_of_prdts: string;
    brand_Status: string;
  }[] = [];

  selectedBrand: { brand: any; index: number } | null = null;

  constructor(private router: Router) {}

  editBrand(brand: any, index: number) {
    this.router.navigate(['/master/product/brand/add-brand'], {
      state: { brand, index },
    });
  }

  ngOnInit() {
    const stored = sessionStorage.getItem('add_Brand');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.brandList = dataArray.map((brand: any) => ({
          brand_Code: brand.brand_Code || '',
          brand_Name: brand.brand_Name || '',
          brand_Category: brand.brand_Category || '',
          brand_Division: brand.brand_Division || '',
          brand_No_of_prdts: brand.brand_No_of_prdts || '',
          brand_Status: 'Active',
        }));

        console.log('Loaded Brands:', this.brandList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for brand-data');
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

  onMenuAction(action: string) {
    if (!this.selectedBrand) return; 

    const data = sessionStorage.getItem('add_Brand');
    if (!data) {
      console.error('No data found in sessionStorage.');
      return;
    }

    let brands = JSON.parse(data);
    const index = this.selectedBrand.index;

    if (action === 'Deactivate' && brands[index]) {
      // Ensure we use `brand_Status` as per the initialization
      const currentStatus = brands[index].brand_Status || 'Active'; // Default to Active if missing
      brands[index].brand_Status =
        currentStatus === 'Active' ? 'Inactive' : 'Active'; // Toggle status

      // Save the updated brand list back to sessionStorage
      sessionStorage.setItem('add_Brand', JSON.stringify(brands));

      // Load the updated brand list into the component
      this.loadBrand();
    }

    // Clear selected brand after action
    this.selectedBrand = null;
  }

  loadBrand() {
    const data = sessionStorage.getItem('add_Brand');
    if (data) {
      this.brandList = JSON.parse(data); // Load updated brands into the component
    } else {
      console.warn('No brand data found in sessionStorage.');
    }
  }
}
