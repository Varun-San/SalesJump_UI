import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

interface ProductRateCard {
  productName: string;
  uom: string;
  currencyType: string;
  mrp: number | null;
  sellingPrice: number | null;
}

@Component({
  selector: 'app-assign-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './assign-product.component.html',
  styleUrls: ['./assign-product.component.css'],
})
export class AssignProductComponent {
  productRateCards: ProductRateCard[] = [
    {
      productName: '',
      uom: '',
      currencyType: '',
      mrp: null,
      sellingPrice: null,
    },
  ];

  uomOptions: string[] = ['Per Pack', 'Per Item', 'Per Kg'];
  currencyOptions: string[] = ['INR', 'USD', 'EUR', 'GBP'];

  constructor(private router: Router) {}

  get isAssignProduct(): boolean {
    return this.router.url.includes('/master/product/rate-card/assign-product');
  }

  cancel() {
    this.router.navigate(['/master/product/rate-card']);
  }

  addProductRow() {
    this.productRateCards.push({
      productName: '',
      uom: '',
      currencyType: '',
      mrp: null,
      sellingPrice: null,
    });
  }

  saveProducts() {
    const isInvalid = this.productRateCards.some(
      (p) =>
        !p.productName ||
        !p.uom ||
        !p.currencyType ||
        p.mrp === null ||
        p.sellingPrice === null
    );

    if (isInvalid) {
      alert('Please fill all fields for every product.');
      return;
    }

    sessionStorage.setItem(
      'product-data',
      JSON.stringify(this.productRateCards)
    );
    console.log('Saved products:', this.productRateCards);
    alert('Product data saved successfully!');
    this.router.navigate(['/master/product/rate-card']);
  }
}
