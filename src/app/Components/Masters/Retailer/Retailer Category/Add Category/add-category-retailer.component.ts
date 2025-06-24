import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-category-retailer',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './add-category-retailer.component.html',
  styleUrl: './add-category-retailer.component.css',
})
export class AddCategoryRetailerComponent {
  editMode: boolean = false;
  editIndex: number | null = null;

  category_Name = '';
  category_Code = '';
  category_No_Of_Customer = 16;
  status = 'Active';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.class) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.category_Name = nav.class.category_Name || '';
      this.category_Code = nav.class.category_Code || '';
      this.category_No_Of_Customer = nav.class.category_No_Of_Customer || 16;
      this.status = nav.class.status || 'Active';
    }
  }

  get isAddClassRetailer(): boolean {
    return this.router.url.includes(
      'master/retailer/retailer-category/add-category-retailer'
    );
  }

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/retailer/retailer-category']);
    });
  }

  saveCategory() {
    if (!this.category_Name || !this.category_Code) {
      alert('Please fill all required fields.');
      return;
    }

    const CategoryData = {
      category_Name: this.category_Name,
      category_Code: this.category_Code,
      category_No_Of_Customer: this.category_No_Of_Customer,
      status: this.status,
    };

    const existingData = sessionStorage.getItem('add_Category');
    let Category: any[] = [];

    try {
      Category = existingData ? JSON.parse(existingData) : [];
    } catch {
      Category = [];
    }

    if (this.editMode && this.editIndex !== null) {
      // Edit existing Category
      Category[this.editIndex] = CategoryData;
    } else {
      // Add new Category
      Category.push(CategoryData);
    }

    sessionStorage.setItem('add_Category', JSON.stringify(Category));

    console.log(
      this.editMode ? 'Updated Category:' : 'Added Category:',
      CategoryData
    );

    this.closeCard();
  }
}
