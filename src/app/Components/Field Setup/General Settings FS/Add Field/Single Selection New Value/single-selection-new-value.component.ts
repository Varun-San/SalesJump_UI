import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-selection-new-value',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './single-selection-new-value.component.html',
  styleUrl: './single-selection-new-value.component.css',
})
export class SingleSelectionNewValueComponent {
  rows = [{ yes: '', needed: '' }];

  constructor(private router: Router) {}

  get isAddValue(): boolean {
    return this.router.url.includes(
      'field-setup/fs-general-settings/add-field/new-single-selection-value'
    );
  }

  addRow() {
    this.rows.push({ yes: '', needed: '' });
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }

  closeCard() {
    this.router.navigate(['/field-setup/fs-general-settings/add-field']);
  }

  saveDivision() {
    const divisionData = this.rows.map((row) => ({
      value: row.yes,
      caption: row.needed,
      status: 'Active',
    }));

    sessionStorage.setItem('add-division-values', JSON.stringify(divisionData));

    console.log('Saved Values:', divisionData);
    this.closeCard();
  }
}
