import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'app-add-field',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    DatePicker,
  ],
  templateUrl: './add-field.component.html',
  styleUrl: './add-field.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFieldComponent {
  // Form Models
  name = '';
  fieldName = '';
  group = '';
  typeOfSetup = '';
  defaultTextValue = '';
  defaultDateValue: Date | null = null;
  time12h: Date = new Date();
  description = '';
  parentField = '';
  parentValue = '';

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

  // Time Picker Trigger
  openTimePicker(timepicker: any): void {
    setTimeout(() => {
      const inputElement = timepicker.inputfieldViewChild?.nativeElement;
      if (inputElement) {
        inputElement.focus();
      }
      timepicker.showOverlay();
    });
  }

  types = ['Text', 'Number', 'Date', 'Time', 'Toggle', 'Single Selection', 'Currency'];

  // Type Change Handler
  onTypeChange(newValue: string): void {
    this.typeOfSetup = newValue;
  }

  get isAddHeadquartersRoute(): boolean {
    return this.router.url.includes('/field-setup/fs-general-settings/add-field');
  }

  closeCard(): void {
    this.router.navigate(['/field-setup/fs-general-settings']);
  }

  // Save Button
  saveFields(): void {
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

    const fieldData = {
      name: this.name,
      type: this.fieldName,
      group: this.group,
      typeOfSetup: this.typeOfSetup,
      description: this.description,
      parentField: this.parentField,
      parentValue: this.parentValue,
    };

    const existingData = sessionStorage.getItem('addFieldsData');
    let fieldsArray: any[] = [];

    try {
      const parsed = JSON.parse(existingData || '[]');
      fieldsArray = Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      fieldsArray = [];
    }

    // Always add a new entry
    fieldsArray.push(fieldData);

    sessionStorage.setItem('addFieldsData', JSON.stringify(fieldsArray));
    this.closeCard();
  }
}
