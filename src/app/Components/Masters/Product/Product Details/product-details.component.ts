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
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-product-details',
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
    MatTooltip,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  handleMenuAction(action: string) {
    // Ensure selectedProductDetails exists before performing any action
    if (!this.selectedProductDetails) return;

    switch (action) {
      case 'edit':
        // Call editProductDetails with selected ProductDetails data
        this.editProductDetails(
          this.selectedProductDetails.productDetails,
          this.selectedProductDetails.index
        );
        break;

      case 'deactivate':
        // Deactivate or Activate the Product status
        this.onMenuAction('Deactivate'); // or 'Activate' depending on your logic
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }
  constructor(private router: Router) {}

  editProductDetails(productDetails: any, index: number) {
    this.router.navigate(['/master/product/product-details/add-product'], {
      state: { product: productDetails, index },
    });
  }

  selectedProductDetails: { productDetails: any; index: number } | null = null;

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  productList: {
    prdtCode: string;
    prdtErpCode: string;
    prdtImage: string;
    prdtName: string;
    prdtBaseUom: string;
    prdtDescription: string;
    status: string;
    prdtShortName: string;
    prdtUom: string;
    prdtConvFactor: '';
    prdtCategory: '';
    prdtGroup: '';
    prdtBrand: '';
    prdtHSNCode: '';
    PrdtType: '';
    prdtPackSize: '';
    prdtOrderConvQty: '';
    prdtTarget: '';
    prdtUnitWeight: '';
    imageBase64: [];
  }[] = [];

  ngOnInit() {
    const stored = sessionStorage.getItem('product-data');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.productList = dataArray.map((product: any) => ({
          prdtCode: product.prdtCode || '',
          prdtErpCode: product.prdtErpCode || '',
          prdtImage: product.prdtImage || '',
          prdtName: product.prdtName || '',
          prdtShortName: product.prdtShortName || '',
          prdtBaseUom: product.prdtBaseUom || '',
          prdtUom: product.prdtUom || '',
          prdtConvFactor: product.prdtConvFactor || '',
          prdtCategory: product.prdtCategory || '',
          prdtGroup: product.prdtGroup || '',
          prdtBrand: product.prdtBrand || '',
          prdtHSNCode: product.prdtHSNCode || '',
          PrdtType: product.PrdtType || '',
          prdtDescription: product.prdtDescription || '',
          prdtPackSize: product.prdtPackSize || '',
          prdtOrderConvQty: product.prdtOrderConvQty || '',
          prdtTarget: product.prdtTarget || '',
          prdtUnitWeight: product.prdtUnitWeight || '',
          status: product.status || 'Active',
          imageBase64: product.imageBase64 || '',
        }));

        console.log('Loaded Products:', this.productList);
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

  openMenu(product: any, index?: number) {
    const i = index ?? this.productList.findIndex((p) => p === product);
    this.selectedProductDetails = { productDetails: product, index: i };
  }
  loadCategories() {
    const data = sessionStorage.getItem('product-data');
    this.productList = data ? JSON.parse(data) : [];
  }

  onMenuAction(action: string) {
    if (!this.selectedProductDetails) return;

    const data = sessionStorage.getItem('product-data');
    let categories = data ? JSON.parse(data) : [];

    const index = this.selectedProductDetails.index;

    if (action === 'Deactivate' && categories[index]) {
      const currentStatus = categories[index].status || 'Active'; // default to Active if missing
      categories[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('product-data', JSON.stringify(categories));

      this.loadCategories();
    }

    this.selectedProductDetails = null;
  }

  getProductImages(product: any): string[] {
    return product.imageBase64?.length
      ? product.imageBase64
      : product.prdtImage || [];
  }
}
