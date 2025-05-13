import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-work-type',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-work-type.component.html',
  styleUrls: ['./add-work-type.component.css'], // ✅ Fixed typo here
})
export class AddWorkTypeComponent {
  workType = '';
  workTypeShortName = '';
  placeInvolved = '';
  expenseKmNeeded = '';
  workTypeFor = '';

  editMode: boolean = false;
  editIndex: number | null = null;

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.workType) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.workType = nav.workType.workType || '';
      this.workTypeShortName = nav.workType.workTypeShortName || '';
      this.placeInvolved = nav.workType.placeInvolved || '';
      this.expenseKmNeeded = nav.workType.expenseKmNeeded || '';
      this.workTypeFor = nav.workType.workTypeFor || '';
    }
  }

  get isAddWorkTypeRoute(): boolean {
    return this.router.url.includes('/master/basic_details/add-work-type');
  }

  closeCard() {
    this.router.navigate(['/master/basic_details/work-type']); // ✅ Adjust path if needed
  }

  saveWorkType() {
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

    const workTypeData = {
      workType: this.workType,
      workTypeShortName: this.workTypeShortName,
      placeInvolved: this.placeInvolved,
      expenseKmNeeded: this.expenseKmNeeded,
      workTypeFor: this.workTypeFor,
      status: 'Active',
    };

    const existingData = sessionStorage.getItem('add-work-type');
    let workTypes = [];

    try {
      workTypes = existingData ? JSON.parse(existingData) : [];
    } catch {
      workTypes = [];
    }

    if (this.editMode && this.editIndex !== null) {
      workTypes[this.editIndex] = workTypeData;
    } else {
      workTypes.push(workTypeData);
    }

    sessionStorage.setItem('add-work-type', JSON.stringify(workTypes));

    console.log(
      this.editMode ? 'Updated Work Type:' : 'Added Work Type:',
      workTypeData
    );

    this.closeCard();
  }
}
