import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-field',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  templateUrl: './add-field.component.html',
  styleUrl: './add-field.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFieldComponent {
  name = '';
  fieldName = '';
  group = '';
  typeOfSetup: string = '';
  defaultTextValue: string = '';
  defaultDateValue: Date | null = null;
  defaultValue?: any;
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

  onTypeChange(newValue: string) {
    this.typeOfSetup = newValue;

    if (newValue !== 'Date' && this.defaultValue instanceof Date) {
      // Format the date to 'YYYY-MM-DD' or any format you want
      const d = this.defaultValue;
      this.defaultValue = `${d.getFullYear()}-${(d.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
    }
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
