import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TOGGLE PASSWORD <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  showPassword = false;
  showConfirmPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FLAGS & ROUTING <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  get isAddRouteList(): boolean {
    return this.router.url.includes('/master/field-force/add-employee-ff');
  }

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.route) {
      this.editMode = true;
      this.editIndex = nav.index;

      const route = nav.route;

      this.employee = {
        status: route.status || null,
        type: route.type || null,
        level: route.level || null,
        joiningDate: route.joiningDate || '',
        reportingTo: route.reportingTo || null,
        userName: route.userName || '',
        email: route.email || '',
        password: route.password || '',
        confirmPassword: route.confirmPassword || '',
        firstName: route.firstName || '',
        lastName: route.lastName || '',
        employeeID: route.employeeID || '',
        dateOfBirth: route.dateOfBirth || '',
        designation: route.designation || null,
        division: route.division || null,
        department: route.department || null,
        state: route.state || null,
        headQuarters: route.headQuarters || null,
        territory: route.territory || null,
        district: route.district || null,
        mobile: route.mobile || '',
        doorNo: route.doorNo || '',
        area: route.area || '',
        city: route.city || '',
        pincode: route.pincode || '',
      };
    }
  }

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DROPDOWN OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'In Active', value: 'In Active' },
  ];

  typeOptions = [
    { label: 'Type 1', value: 'Type 1' },
    { label: 'Type 2', value: 'Type 2' },
  ];

  levelOptions = [
    { label: '1st Level', value: '1st Level' },
    { label: '2nd Level', value: '2nd Level' },
  ];

  reportingOptions = [
    { label: 'Manager', value: 'Manager' },
    { label: 'Asst Manager', value: 'Asst Manager' },
  ];

  designationOptions = [
    { label: 'Trainee', value: 'Trainee' },
    { label: 'Devloper', value: 'Devloper' },
  ];

  divisionOptions = [
    { label: 'Division 1', value: 'Division 1' },
    { label: 'Division 2', value: 'Division 2' },
  ];

  departmentOptions = [
    { label: 'Department 1', value: 'Department 1' },
    { label: 'Department 2', value: 'Department 2' },
  ];

  stateOptions = [
    { label: 'Tamil Nadu', value: 'Tamil Nadu' },
    { label: 'Kerala', value: 'Kerala' },
  ];

  headQuartersOptions = [
    { label: 'Head Quarters 1', value: 'Head Quarters 1' },
    { label: 'Head Quarters 2', value: 'Head Quarters 2' },
  ];

  territoryOptions = [
    { label: 'Territory 1', value: 'Territory 1' },
    { label: 'Territory 2', value: 'Territory 2' },
  ];

  districtOptions = [
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Tiruvalur', value: 'Tirvallur' },
  ];

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM STATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editMode: boolean = false;
  editIndex: number | null = null;

  employee: EmployeeDetails = {
    status: null,
    type: null,
    level: null,
    joiningDate: null,
    reportingTo: null,
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    employeeID: '',
    dateOfBirth: '',
    designation: null,
    division: null,
    department: null,
    state: null,
    headQuarters: null,
    territory: null,
    district: null,
    mobile: '',
    doorNo: '',
    area: '',
    city: '',
    pincode: '',
  };

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM ACTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/field-force/field-force-t']);
    });
  }

  saveEmployeeList() {
    if (
      !this.employee.firstName ||
      !this.employee.lastName ||
      !this.employee.email
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const employeeData: EmployeeDetails = { ...this.employee };

    const existingData = sessionStorage.getItem('Employee-List-Data');
    let employeeListArray: EmployeeDetails[] = [];

    try {
      employeeListArray = existingData ? JSON.parse(existingData) : [];
    } catch {
      employeeListArray = [];
    }

    if (this.editMode && this.editIndex !== null) {
      employeeListArray[this.editIndex] = employeeData;
      console.log('Updated Employee at index', this.editIndex);
    } else {
      employeeListArray.push(employeeData);
      console.log('Added Employee -->', employeeData);
    }

    sessionStorage.setItem(
      'Employee-List-Data',
      JSON.stringify(employeeListArray)
    );

    this.closeCard();
  }
}

interface EmployeeDetails {
  status: string | null;
  type: string | null;
  level: string | null;
  joiningDate: Date | null;
  reportingTo: string | null;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  employeeID: string;
  dateOfBirth: string;
  designation: string | null;
  division: string | null;
  department: string | null;
  state: string | null;
  headQuarters: string | null;
  territory: string | null;
  district: string | null;
  mobile: string;
  doorNo: string;
  area: string;
  city: string;
  pincode: string;
}
