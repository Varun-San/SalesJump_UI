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
  editMode: boolean = false;
  editIndex: number | null = null;

  category_Code = '';
  category_Name = '';
  category_No_Of_Prdts = '';
  category_Divisions = '';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.category) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.category_Code = nav.category.category_Code || '';
      this.category_Name = nav.category.category_Name || '';
      this.category_No_Of_Prdts = nav.category.category_No_of_Prdts || '';
      this.category_Divisions = nav.category.category_Divisions || '';
    }
  }

  get isAddCategory(): boolean {
    return this.router.url.includes('master/product/category/add-category');
  }

  closeCard() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/product/category']);
    });
  }

  saveCategory() {
    if (
      !this.category_Code ||
      !this.category_Name ||
      !this.category_No_Of_Prdts ||
      !this.category_Divisions
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const categoryData = {
      category_Code: this.category_Code,
      category_Name: this.category_Name,
      category_No_of_Prdts: this.category_No_Of_Prdts,
      category_Divisions: this.category_Divisions,
    };

    const existingData = sessionStorage.getItem('add_Category');
    let categories: any[] = [];

    try {
      categories = existingData ? JSON.parse(existingData) : [];
    } catch {
      categories = [];
    }

    if (this.editMode && this.editIndex !== null) {
      categories[this.editIndex] = categoryData;
    } else {
      categories.push(categoryData);
    }

    sessionStorage.setItem('add_Category', JSON.stringify(categories));

    console.log(
      this.editMode ? 'Updated Category:' : 'Added Category:',
      categoryData
    );

    this.closeCard();
  }
}
