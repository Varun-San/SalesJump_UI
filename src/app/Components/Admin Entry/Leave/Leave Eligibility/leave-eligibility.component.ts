import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Import Router
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave-eligibility',
  imports: [
    FontAwesomeModule,
    CommonModule,
    MatChipsModule,
    FormsModule,
    NgSelectModule,
  ],
  templateUrl: './leave-eligibility.component.html',
  styleUrl: './leave-eligibility.component.css',
})
export class LeaveEligibilityComponent {
  // Active tab
  tabs = ['Role Eligibility', 'Field Force Eligibility'];
  activeTab = this.tabs[0];

  // Dropdown years for each tab
  Year_Role_Eligibility_Options = [
    { label: '2020', value: '2020' },
    { label: '2021', value: '2021' },
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
  ];

  Year_Field_Force_Eligibility_Options = [
    { label: '2020', value: '2020' },
    { label: '2021', value: '2021' },
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
  ];

  tabConfigs: TabConfig[] = [
    {
      name: 'Role Eligibility',
      fields: [
        {
          label: 'Year',
          id: 'Year_Role_Eligibility',
          required: true,
          items: this.Year_Role_Eligibility_Options,
        },
      ],
    },
    {
      name: 'Field Force Eligibility',
      fields: [
        {
          label: 'Year',
          id: 'Year_Field_Force_Eligibility',
          required: true,
          items: this.Year_Field_Force_Eligibility_Options,
        },
      ],
    },
  ];

  Role_Eligibility: any = {};
  Field_Force_Eligibility: any = {};
  counterSaleData: any = {};

  // Leave types with keys (strongly typed)
  leaveTypes: { key: LeaveTypeKey; label: string }[] = [
    { key: 'paid', label: 'Paid' },
    { key: 'cal', label: 'CaL' },
    { key: 'bl', label: 'BL' },
    { key: 'pl', label: 'PL' },
    { key: 'sl', label: 'SL' },
    { key: 'lop', label: 'LOP' },
  ];

  // Designations for Role Eligibility tab
  designations: string[] = [
    'Area Sales Manager',
    'Territory Sales Officer',
    'Regional Manager',
  ];

  // leaveData holds editable values for Role Eligibility tab
  leaveData: { [designation: string]: { [key in LeaveTypeKey]: number } } = {};

  // Field force data for Field Force Eligibility tab (read-only table)
  fieldForceData: FieldForcePerson[] = [
    {
      slNo: 1,
      fieldForceName: 'John Doe',
      designation: 'Medical Rep',
      headQuarters: 'Mumbai',
      employeeCode: 'EMP001',
      joiningDate: '2023-01-15',
      paid: 5,
      cal: 3,
      bl: 0,
      pl: 1,
      sl: 2,
      lop: 0,
    },
    {
      slNo: 2,
      fieldForceName: 'Jane Smith',
      designation: 'Territory Sales Officer',
      headQuarters: 'Delhi',
      employeeCode: 'EMP002',
      joiningDate: '2022-12-01',
      paid: 2,
      cal: 0,
      bl: 1,
      pl: 0,
      sl: 1,
      lop: 1,
    },
    // Add more person objects as needed
  ];

  constructor(private router: Router, private ActiveRoute: ActivatedRoute) {
    // Initialize leaveData with zeroes for all designations and leave types
    this.designations.forEach((desig) => {
      this.leaveData[desig] = {} as { [key in LeaveTypeKey]: number };
      this.leaveTypes.forEach((lt) => {
        this.leaveData[desig][lt.key] = 0;
      });
    });

    // Initialize editableLeaveData from existing fieldForceData
    this.fieldForceData.forEach((person) => {
      this.editableLeaveData[person.slNo] = {
        paid: person.paid,
        cal: person.cal,
        bl: person.bl,
        pl: person.pl,
        sl: person.sl,
        lop: person.lop,
      };
    });
  }

  // Returns the fields config for the current tab, for dropdowns
  get currentTabConfig(): TabConfig | undefined {
    return this.tabConfigs.find((tab) => tab.name === this.activeTab);
  }

  // Returns correct form model for the current tab, used in ngModel for dropdowns
  getFormModel(): any {
    switch (this.activeTab) {
      case 'Role Eligibility':
        return this.Role_Eligibility;
      case 'Field Force Eligibility':
        return this.Field_Force_Eligibility;
      default:
        return {};
    }
  }

  // Called on tab click
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Navigation (not used in template but available)
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Save function for current tab
  save() {
    switch (this.activeTab) {
      case 'Role Eligibility':
        this.Save_Role_Eligibility(this.Role_Eligibility);
        break;
      case 'Field Force Eligibility':
        this.Save_Field_Force_Eligibility(this.Field_Force_Eligibility);
        break;
      default:
        console.warn('No tab selected');
    }
  }

  Save_Role_Eligibility(data: any) {
    console.log('Saving Role Eligibility:', data);
    sessionStorage.setItem('Role_Eligibility', JSON.stringify(data));
  }

  Save_Field_Force_Eligibility(data: any) {
    console.log('Saving Field Force Eligibility:', data);
    sessionStorage.setItem('Field_Force_Eligibility', JSON.stringify(data));
  }

  // On component init, read from session storage if exists
  ngOnInit() {
    const primary = sessionStorage.getItem('Role_Eligibility');
    if (primary) {
      this.Role_Eligibility = JSON.parse(primary);
    }
    const secondary = sessionStorage.getItem('Field_Force_Eligibility');
    if (secondary) {
      this.Field_Force_Eligibility = JSON.parse(secondary);
    }
  }

  // Format input element names uniquely (for form submit or testing)
  formatName(desig: string, key: string): string {
    return desig.toLowerCase().replace(/ /g, '_') + '_' + key;
  }

  // Editable leave data storage keyed by person ID (eg. slNo) and leave type
  editableLeaveData: { [personId: number]: { [key in LeaveTypeKey]: number } } =
    {};
}

type LeaveTypeKey = 'paid' | 'cal' | 'bl' | 'pl' | 'sl' | 'lop';
interface FieldForcePerson {
  slNo: number;
  fieldForceName: string;
  designation: string;
  headQuarters: string;
  employeeCode: string;
  joiningDate: string;
  paid: number;
  cal: number;
  bl: number;
  pl: number;
  sl: number;
  lop: number;
}

export interface FormField {
  label: string;
  id: string;
  required?: boolean;
  items: { label: string; value: string }[];
}

export interface TabConfig {
  name: string;
  fields: FormField[];
}
