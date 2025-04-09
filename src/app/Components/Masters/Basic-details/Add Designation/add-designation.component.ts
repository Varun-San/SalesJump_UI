import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-designation',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-designation.component.html',
  styleUrl: './add-designation.component.css',
})
export class AddDesignationComponent {
  divisionPrefix = '';
  divisionName = '';

  constructor(private router: Router) {}

  //! Dropdown
  types = ['Division A', 'Division B', 'Division C']; // Replace with your actual values
  selectedType = ''; // This will be bound to the dropdown

  get isAddDesignationRoute(): boolean {
    return this.router.url.includes('/master/basic_details/add-designation');
  }

  closeCard() {
    this.router.navigate(['/master/basic_details/designation']); // go back to main tab
  }

  saveDivision() {
    if (!this.divisionPrefix || !this.divisionName || !this.selectedType) {
      alert('Please fill all required fields.');
      return;
    }

    console.log('Saving division:', {
      shortName: this.divisionPrefix,
      designation: this.divisionName,
      type: this.selectedType,
    });

    this.closeCard();
  }
}
