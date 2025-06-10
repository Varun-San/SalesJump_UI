import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-brand',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './add-brand.component.html',
  styleUrl: './add-brand.component.css',
})
export class AddBrandComponent {
  editMode: boolean = false;
  editIndex: number | null = null;

  brand_Code = '';
  brand_Name = '';
  brand_Category = '';
  brand_Division: string | null = null;
  brand_No_of_prdts = '';

  brandDivision_Options = ['Basic'];

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.brand) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.brand_Code = nav.brand.brand_Code || '';
      this.brand_Name = nav.brand.brand_Name || '';
      this.brand_Category = nav.brand.brand_Category || '';
      this.brand_Division = nav.brand.brand_Division || '';
      this.brand_No_of_prdts = nav.brand.brand_No_of_prdts || '';
    }
  }

  get isAddBrand(): boolean {
    return this.router.url.includes('master/product/brand/add-brand');
  }

  closeCard() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/product/brand']);
    });
  }

  saveBrand() {
    if (
      !this.brand_Code ||
      !this.brand_Name ||
      !this.brand_Category ||
      !this.brand_Division ||
      !this.brand_No_of_prdts
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const brandData = {
      brand_Code: this.brand_Code,
      brand_Name: this.brand_Name,
      brand_Category: this.brand_Category,
      brand_Division: this.brand_Division,
      brand_No_of_prdts: this.brand_No_of_prdts,
    };

    const existingData = sessionStorage.getItem('add_Brand');
    let add_brand: any[] = [];

    try {
      add_brand = existingData ? JSON.parse(existingData) : [];
      if (!Array.isArray(add_brand)) {
        add_brand = [];
      }
    } catch (e) {
      add_brand = [];
    }

    if (this.editMode && this.editIndex !== null) {
      add_brand[this.editIndex] = brandData;
    } else {
      add_brand.push(brandData);
    }

    sessionStorage.setItem('add_Brand', JSON.stringify(add_brand));

    console.log(this.editMode ? 'Updated Brand:' : 'Added Brand:', brandData);

    this.closeCard();
  }
}
