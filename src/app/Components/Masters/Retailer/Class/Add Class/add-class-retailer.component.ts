import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-class-retailer',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './add-class-retailer.component.html',
  styleUrl: './add-class-retailer.component.css',
})
export class AddClassRetailerComponent {
  editMode: boolean = false;
  editIndex: number | null = null;

  class_Name = '';
  class_Code = '';
  class_No_Of_Customer = 16;
  status = 'Active';

  constructor(private router: Router) {
    const nav = history.state;

    // If there's data in the navigation state, set the fields for editing
    if (nav && nav.class) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.class_Name = nav.class.class_Name || ''; // Ensure this is correctly set
      this.class_Code = nav.class.class_Code || '';
      this.class_No_Of_Customer = nav.class.class_No_Of_Customer || 16; // Default to 16 if no value
      this.status = nav.class.status || 'Active'; // Default to 'Active' if no value
    }
  }

  get isAddClassRetailer(): boolean {
    return this.router.url.includes(
      'master/retailer/retailer-class/add-class-retailer'
    );
  }

  closeCard() {
    this.router.navigate(['/master/retailer/retailer-class']);
  }

  saveClass() {
    if (!this.class_Name || !this.class_Code) {
      alert('Please fill all required fields.');
      return;
    }

    const classData = {
      class_Name: this.class_Name,
      class_Code: this.class_Code,
      class_No_Of_Customer: this.class_No_Of_Customer,
      status: this.status,
    };

    const existingData = sessionStorage.getItem('add_Class');
    let Class: any[] = [];

    try {
      Class = existingData ? JSON.parse(existingData) : [];
    } catch {
      Class = [];
    }

    if (this.editMode && this.editIndex !== null) {
      // Edit existing class
      Class[this.editIndex] = classData;
    } else {
      // Add new class
      Class.push(classData);
    }

    sessionStorage.setItem('add_Class', JSON.stringify(Class));

    console.log(this.editMode ? 'Updated Class:' : 'Added Class:', classData);

    this.closeCard();
  }
}
