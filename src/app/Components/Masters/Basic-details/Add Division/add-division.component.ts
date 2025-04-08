import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-division',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-division.component.html',
  styleUrl: './add-division.component.css',
})
export class AddDivisionComponent {
  divisionPrefix = '';
  divisionName = '';

  constructor(private router: Router) {}

  get isAddDivisionRoute(): boolean {
    return this.router.url.includes('/master/basic_details/add-division');
  }

  closeCard() {
    this.router.navigate(['/master/basic_details/division']); // go back to main tab
  }

  saveDivision() {
    if (!this.divisionPrefix || !this.divisionName) {
      alert('Please fill all required fields.');
      return;
    }

    console.log('Saving division:', this.divisionPrefix, this.divisionName);
    // Save logic here...

    this.closeCard(); // Close card after saving
  }
}
