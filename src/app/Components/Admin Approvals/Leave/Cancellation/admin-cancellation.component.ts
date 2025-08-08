import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin-cancellation',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './admin-cancellation.component.html',
  styleUrl: './admin-cancellation.component.css',
})
export class AdminCancellationComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE CHECK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  get isAddHeadquartersRoute(): boolean {
    return this.router.url.includes(
      '/admin-approval/admin-leave-approval/cancellation'
    );
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  formData: ProductUpload = {
    selectDivision: null,
    selectFieldForce: null,
    selectYear: null,
  };

  divisionOptions = ['Division A', 'Division B', 'Division C'];
  FieldForceOptions = ['Field Force A', 'Field Force B', 'Field Force C'];
  YearOptions = ['2023', '2024', '2025'];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR & INITIALIZATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  constructor(private router: Router) {}
}

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INTERFACE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
interface ProductUpload {
  selectDivision: string | null;
  selectFieldForce: string | null;
  selectYear: string | null;
}
