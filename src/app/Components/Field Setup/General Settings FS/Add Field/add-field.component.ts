import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-add-field',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-field.component.html',
  styleUrl: './add-field.component.css',
})
export class AddFieldComponent {
  name = '';
  fieldName = '';
  group = '';
  typeOfSetup = '';
  defaultValue = '';
  description = '';
  parentField = '';
  parentValue = '';

  editMode = false;
  editIndex: number | null = null;

  //! Dropdown options
  types = [
    'Text',
    'Number',
    'Date',
    'Time',
    'Toogle',
    'Single Selection',
    'Currency',
  ];

  changeField() {
    console.log(1234);
  }

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

  get isAddHeadquartersRoute(): boolean {
    return this.router.url.includes(
      '/field-setup/fs-general-settings/add-field'
    );
  }

  closeCard() {
    this.router.navigate(['/field-setup/fs-general-settings']);
  }

  saveFields() {
    if (
      !this.name ||
      !this.fieldName ||
      !this.group ||
      !this.typeOfSetup ||
      !this.defaultValue ||
      !this.description ||
      !this.parentField ||
      !this.parentValue
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const fields = {
      name: this.name,
      type: this.fieldName,
      group: this.group,
      typeOfSetup: this.typeOfSetup,
      defaultValue: this.defaultValue,
      description: this.description,
      parentField: this.parentField,
      parentValue: this.parentValue,
    };

    const existingData = sessionStorage.getItem('addFieldsData');
    let addFieldArray: any[] = [];

    try {
      const parsed = JSON.parse(existingData || '[]');
      addFieldArray = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      console.warn('Failed to parse sessionStorage data. Resetting...');
      addFieldArray = [];
    }

    if (this.editMode && this.editIndex !== null) {
      // Update the headquarters at the provided index
      addFieldArray[this.editIndex] = fields;
    } else {
      // Add the new headquarters
      addFieldArray.push(fields);
    }

    // Store the updated data back in sessionStorage
    sessionStorage.setItem('addFieldsData', JSON.stringify(addFieldArray));

    console.log(
      this.editMode ? 'Updated FieldsData:' : 'Added FieldsData:',
      fields
    );

    this.closeCard();
  }
}
