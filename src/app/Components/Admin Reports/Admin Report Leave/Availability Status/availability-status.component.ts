import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-availability-status',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './availability-status.component.html',
  styleUrl: './availability-status.component.css',
})
export class AvailabilityStatusComponent {
  // For optional edit support; set these when entering edit mode
  editMode = false;
  editIndex: number | null = null;

  // Storage key for this feature
  private readonly storageKey = 'availability_status';

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE CHECK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  get isAddHeadquartersRoute(): boolean {
    return this.router.url.includes(
      '/admin-reports/admin-reports-leave/availability-status'
    );
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  formData: ProductUpload = {
    selectDivision: null,
    selectFieldForce: null,
    selectYear: null,
  };

  divisionOptions = ['Division A', 'Division B', 'Division C'];
  fieldForceOptions = ['Division D', 'Division E', 'Division F'];
  yearOptions = ['2020', '2021', '2022'];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR & INITIALIZATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  constructor(private router: Router) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  saveAvailabilityStatus(): void {
    // Validate required fields
    if (
      !this.formData.selectDivision ||
      !this.formData.selectFieldForce ||
      !this.formData.selectYear
    ) {
      alert('Please select Division, Field Force, and Year.');
      return;
    }

    // Build a record from the form model
    const record: ProductUpload = {
      selectDivision: this.formData.selectDivision,
      selectFieldForce: this.formData.selectFieldForce,
      selectYear: this.formData.selectYear,
    };

    // Read the existing list from sessionStorage
    let list: ProductUpload[] = [];
    try {
      const raw = sessionStorage.getItem(this.storageKey);
      const parsed = raw ? JSON.parse(raw) : [];
      list = Array.isArray(parsed) ? parsed : [];
    } catch {
      list = [];
    }

    // Add or update depending on edit mode
    if (
      this.editMode &&
      this.editIndex !== null &&
      this.editIndex >= 0 &&
      this.editIndex < list.length
    ) {
      list[this.editIndex] = record;
    } else {
      list.push(record);
    }

    // Persist the updated list
    sessionStorage.setItem(this.storageKey, JSON.stringify(list));

    // Optionally reset edit state
    this.editMode = false;
    this.editIndex = null;

    // Navigate back
    this.closeCard();
  }

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([
        '/admin-reports/admin-reports-leave/availability-status',
      ]);
    });
  }
}

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INTERFACE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
interface ProductUpload {
  selectDivision: string | null;
  selectFieldForce: string | null;
  selectYear: string | null;
}
