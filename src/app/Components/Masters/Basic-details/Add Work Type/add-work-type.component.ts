import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-work-type',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-work-type.component.html',
  styleUrl: './add-work-type.component.css',
})
export class AddWorkTypeComponent {
  workType = '';
  workTypeShortName = '';
  placeInvolved = '';
  expenseKmNeeded = '';
  workTypeFor = '';

  constructor(private router: Router) {}

  get isAddworktypeRoute(): boolean {
    return this.router.url.includes('/master/basic_details/add-work-type');
  }

  closeCard() {
    this.router.navigate(['/master/basic_details/work-type']); // go back to main tab
  }

  saveDivision() {
    if (
      !this.workType ||
      !this.workTypeShortName ||
      !this.placeInvolved ||
      !this.expenseKmNeeded ||
      !this.workTypeFor
    ) {
      alert('Please fill all required fields.');
      return;
    }

    console.log('Saving Add work type:', {
      workType: this.workType,
      workTypeShortName: this.workTypeShortName,
      placeInvolved: this.placeInvolved,
      expenseKmNeeded: this.expenseKmNeeded,
      workTypeFor: this.workTypeFor,
    });

    const addWorkType = {
      workType: this.workType,
      workTypeShortName: this.workTypeShortName,
      placeInvolved: this.placeInvolved,
      expenseKmNeeded: this.expenseKmNeeded,
      workTypeFor: this.workTypeFor,
    };

    const existingData = sessionStorage.getItem('add-Work-Type');
    let add_work_type_Array: any[] = [];

    try {
      const parsed = JSON.parse(existingData || '[]');
      // If parsed is an array, use it; otherwise convert to array
      add_work_type_Array = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      console.warn('Failed to parse sessionStorage data. Resetting...');
      add_work_type_Array = [];
    }

    add_work_type_Array.push(addWorkType);

    sessionStorage.setItem(
      'add-Work-Type',
      JSON.stringify(add_work_type_Array)
    );

    console.log('Saving Add Work type:', add_work_type_Array);

    this.closeCard();
  }
}
