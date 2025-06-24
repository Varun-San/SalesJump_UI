import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-designation',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './add-designation.component.html',
  styleUrl: './add-designation.component.css',
})
export class AddDesignationComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE CHECK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  get isAddDesignation(): boolean {
    return this.router.url.includes(
      '/master/basic_details/designation/add-designation'
    );
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FLAGS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editMode: boolean = false;
  editIndex: number | null = null;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM FIELDS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  shortName: string = '';
  designation: string = '';
  type: string | null = null;
  userWiseCount: string = '';
  status: string = '';

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DROPDOWN OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  typeOptions: string[] = ['Basic'];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.designation) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.shortName = nav.designation.shortName || '';
      this.designation = nav.designation.designation || '';
      this.type = nav.designation.type || '';
      this.userWiseCount = nav.designation.userWiseCount || '';
      this.status = nav.designation.status || '';
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CLOSE FORM & NAVIGATE BACK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/basic_details/designation']);
    });
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SAVE DESIGNATION DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  saveDesignation(): void {
    if (
      !this.shortName ||
      !this.designation ||
      !this.type ||
      !this.userWiseCount
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const designationData = {
      shortName: this.shortName,
      designation: this.designation,
      type: this.type,
      userWiseCount: this.userWiseCount,
      status: 'Active',
    };

    const existingData = sessionStorage.getItem('add-designation');
    let designation = [];

    try {
      designation = existingData ? JSON.parse(existingData) : [];
    } catch {
      designation = [];
    }

    if (this.editMode && this.editIndex !== null) {
      designation[this.editIndex] = designationData;
    } else {
      designation.push(designationData);
    }

    sessionStorage.setItem('add-designation', JSON.stringify(designation));

    console.log(
      this.editMode ? 'Updated Designation:' : 'Added Designation:',
      designationData
    );

    this.closeCard();
  }
}
