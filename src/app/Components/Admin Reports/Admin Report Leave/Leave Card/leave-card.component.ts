import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-leave-card',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './leave-card.component.html',
  styleUrl: './leave-card.component.css',
})
export class LeaveCardComponent {
  // Optional edit support
  editMode = false;
  editIndex: number | null = null;

  // Storage key for this feature
  private readonly storageKey = 'leave_card';

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE CHECK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  get isAddHeadquartersRoute(): boolean {
    return this.router.url.includes(
      '/admin-reports/admin-reports-leave/leave-card'
    );
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  formData: ProductUpload = {
    selectDivision: null,
    selectFieldForce: null,
    selectYear: null,
    selectManager: null,
  };

  divisionOptions = ['Division A', 'Division B', 'Division C'];
  fieldForceOptions = ['Division D', 'Division E', 'Division F'];
  yearOptions = ['2020', '2021', '2022'];
  managerOptions = ['Manager A', 'Manager B', 'Manager C'];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR & INITIALIZATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  constructor(private router: Router) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  saveLeaveCard(): void {
    // Validate required fields
    if (
      !this.formData.selectDivision ||
      !this.formData.selectFieldForce ||
      !this.formData.selectYear ||
      !this.formData.selectManager
    ) {
      alert('Please select Division, Field Force, Year, and Manager.');
      return;
    }

    // Build a record from the form model (matches interface)
    const record: ProductUpload = {
      selectDivision: this.formData.selectDivision,
      selectFieldForce: this.formData.selectFieldForce,
      selectYear: this.formData.selectYear,
      selectManager: this.formData.selectManager,
    };

    // Read the existing list from sessionStorage
    let list: ProductUpload[] = [];
    try {
      const raw = sessionStorage.getItem(this.storageKey);
      const parsed = raw ? JSON.parse(raw) : [];
      list = Array.isArray(parsed) ? (parsed as ProductUpload[]) : [];
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

    // Reset edit state (optional)
    this.editMode = false;
    this.editIndex = null;

    // Navigate back to Leave Card
    this.closeCard();
  }

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/aadmin-reports/admin-reports-leave/leave-card']);
    });
  }
}

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INTERFACE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
interface ProductUpload {
  selectDivision: string | null;
  selectFieldForce: string | null;
  selectManager: string | null;
  selectYear: string | null;
}
