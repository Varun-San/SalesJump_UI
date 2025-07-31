import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-entry',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  templateUrl: './leave-entry.component.html',
  styleUrl: './leave-entry.component.css',
})
export class LeaveEntryComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE CHECK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  get isLeaveEntry(): boolean {
    return this.router.url.includes('/entry/leave/leave_entry');
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  formData: ProductUpload = {
    selectDivision: null,
    selectFieldForce: null,
    selectLeaveType: null,
    selectLeaveOption: null,
    fromDate: null,
    toDate: null,
    noofDays: '',
    reason: '',
  };

  selectDivisionList = [
    { name: 'North Zone' },
    { name: 'South Zone' },
    { name: 'East Zone' },
    { name: 'West Zone' },
    { name: 'Central Zone' },
    { name: 'North-East Zone' },
    { name: 'Head Office' },
    { name: 'Sales' },
    { name: 'Operations' },
    { name: 'Corporate' },
  ];

  selectFieldForceList = [
    { name: 'Sales Team A' },
    { name: 'Sales Team B' },
    { name: 'Marketing Team' },
    { name: 'Customer Support' },
    { name: 'Technical Support' },
    { name: 'Field Engineers' },
    { name: 'Merchandising' },
    { name: 'Promotions Team' },
    { name: 'Delivery Team' },
    { name: 'Quality Inspection' },
  ];

  selectLeaveTypeList = [
    { name: 'Casual Leave' },
    { name: 'Sick Leave' },
    { name: 'Earned Leave' },
    { name: 'Maternity Leave' },
    { name: 'Paternity Leave' },
    { name: 'Bereavement Leave' },
    { name: 'Compensatory Off' },
    { name: 'Leave Without Pay' },
    { name: 'Work From Home' },
    { name: 'Holiday' },
  ];

  selectLeaveOptionList = [
    { name: 'Full Day' },
    { name: 'Half Day - Morning' },
    { name: 'Half Day - Afternoon' },
    { name: 'Hourly' },
    { name: 'Flexible Hours' },
    { name: 'Compensatory Off' },
    { name: 'Work From Home' },
  ];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR & INITIALIZATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  constructor(private router: Router) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/entry/leave/leave_entry']);
    });
  }
}

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INTERFACE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
interface ProductUpload {
  selectDivision: string | null;
  selectFieldForce: string | null;
  selectLeaveType: string | null;
  selectLeaveOption: string | null;
  fromDate: Date | null;
  toDate: Date | null;
  noofDays: string;
  reason: string;
}
