import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-category',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
  category_Code = '';
  category_Name = '';
  category_No_Of_Prdts = '';
  category_Divisions = '';

  constructor(private router: Router) {}

  get isAddCategory(): boolean {
    return this.router.url.includes('master/product/category/add-category');
  }

  closeCard() {
    this.router.navigate(['/master/product/category']); // go back to main tab
  }

  saveDivision() {
    if (
      !this.category_Code ||
      !this.category_Name ||
      !this.category_No_Of_Prdts ||
      !this.category_Divisions
    ) {
      alert('Please fill all required fields.');
      return;
    }

    console.log('Saving Add Category:', {
      category_Code: this.category_Code,
      category_Name: this.category_Name,
      category_No_of_Prdts: this.category_No_Of_Prdts,
      category_Divisions: this.category_Divisions,
    });

    const add_Category = {
      category_Code: this.category_Code,
      category_Name: this.category_Name,
      category_No_of_Prdts: this.category_No_Of_Prdts,
      category_Divisions: this.category_Divisions,
    };

    const existingData = sessionStorage.getItem('add_Category');
    let add_Category_Array: any[] = [];

    try {
      const parsed = JSON.parse(existingData || '[]');
      // If parsed is an array, use it; otherwise convert to array
      add_Category_Array = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      console.warn('Failed to parse sessionStorage data. Resetting...');
      add_Category_Array = [];
    }

    add_Category_Array.push(add_Category);

    sessionStorage.setItem('Add-Category', JSON.stringify(add_Category_Array));

    console.log('Saving Add Category:', add_Category_Array);

    this.closeCard();
  }
}
