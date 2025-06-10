import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DatePicker } from 'primeng/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';

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
    NgSelectModule,
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
  group: string | null = null;
  typeOfSetup: string | null = null;
  defaultTextValue = '';
  defaultDateValue: Date | null = null;
  time12h: Date = new Date();
  description = '';
  parentField: string | null = null;
  parentValue: string | null = null;
  singleSelection: { name: string } | null = null;
  toggleoff: string | null = null;
  toggleon: string | null = null;

  singleSelection_Values = [
    { name: 'Value 1', needed: false, defaultNeeded: false, toggled: false },
    { name: 'Value 2', needed: false, defaultNeeded: false, toggled: false },
    { name: '>>> Customize' },
  ];

  // ! OPTIONS FOR THE NG SELECTS
  types = [
    'Text',
    'Number',
    'Date',
    'Time',
    'Toggle',
    'Single Selection',
    'Currency',
  ];

  group_Values = ['Group'];

  toggleOn_Values = ['1', '2'];

  toggleOff_Values = ['1', '2'];

  parentValues_Options = ['Geo Tagging', 'Geo Fencing Tagging'];

  parentFields_Options = ['Geo Tagging', 'Geo Fencing Tagging'];

  // ? ---------------------------------------------------------------------

  compareFn = (a: any, b: any) => a?.name === b?.name;

  toggleNeeded(item: any, event: MouseEvent): void {
    event.stopPropagation();
    item.needed = !item.needed;
    item.toggled = true;
    console.log(`${item.name} is now ${item.needed ? 'needed' : 'not needed'}`);
  }

  onCustomizeClick(event: MouseEvent): void {
    event.stopPropagation();
    console.log('Customize clicked');
  }
  onItemSelected(selectedItem: any): void {
    this.singleSelection_Values.forEach((item) => {
      if (item.defaultNeeded !== undefined) {
        item.needed = item.defaultNeeded;
      }
    });
    console.log(`Selected ${selectedItem.name}. All items reset to default.`);
  }

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

  typeOfSetup_Values = [
    { name: 'Text' },
    { name: 'Number' },
    { name: 'Date' },
    { name: 'Time' },
    { name: 'Time' },
    { name: 'Toggle' },
    { name: 'Single Selection' },
    { name: 'Currency' },
  ];

  // Type Change Handler
  onTypeChange(newValue: string): void {
    this.typeOfSetup = newValue;
  }

  get isAddHeadquartersRoute(): boolean {
    return this.router.url.includes(
      '/field-setup/fs-general-settings/add-field'
    );
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
      !this.parentValue ||
      !this.toggleon ||
      !this.toggleon
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const fieldData = {
      name: this.name,
      type: this.fieldName,
      group: this.group,
      typeOfSetup: this.typeOfSetup,
      toggleon: this.toggleon,
      toggleoff: this.toggleoff,
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
