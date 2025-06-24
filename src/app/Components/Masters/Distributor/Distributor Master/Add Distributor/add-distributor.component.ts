import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-distributor',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './add-distributor.component.html',
  styleUrl: './add-distributor.component.css',
})
export class AddDistributorComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TOGGLE PASSWORD <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FLAGS & ROUTING <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  get isAddRouteList(): boolean {
    return this.router.url.includes(
      '/master/distributor/distributor-master/add-distributor'
    );
  }

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.route) {
      this.editMode = true;
      this.editIndex = nav.index;

      const route = nav.route;

      this.distributor = {
        erpCode: route.erpCode || '',
        town: route.town || null,
        mobile: route.mobile || '',
        distributorName: route.distributorName || '',
        type: route.type || null,
        fieldOfficer: route.fieldOfficer || '',
        contactPerson: route.contactPerson || '',
        rate: route.rate || null,
        password: route.password || '',
        email: route.email || '',
        city: route.city || null,
        headQuarters: route.headQuarters || '',
        territory: route.territory || null,
        normValue: route.normValue || '',
        category: route.category || null,
        districtName: route.districtName || null,
        address: route.address || '',
        gstNo: route.gstNo || '',
        userName: route.userName || '',
        designation: route.designation || '',
        dlNo: route.dlNo || '',
        divisions: route.divisions || [],
      };
    }
  }

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DROPDOWN OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  typeOptions = [
    { label: 'Type 1', value: 'Type 1' },
    { label: 'Type 2', value: 'Type 2' },
  ];

  townoptions = [
    { label: 'Town 1', value: 'Town 1' },
    { label: 'Town 2', value: 'Town 2' },
  ];

  rateOptions = [
    { label: 'Salary', value: 'Salary' },
    { label: 'Exceptions', value: 'Exceptions' },
  ];

  cityOptions = [
    { label: 'TamilNadu', value: 'TamilNadu' },
    { label: 'Kerala', value: 'Kerala' },
  ];

  territoryOption = [
    { label: 'Territory_1', value: 'Territory_1' },
    { label: 'Territory_2', value: 'Territory_2' },
    { label: 'Territory_3', value: 'Territory_3' },
    { label: 'Territory_4', value: 'Territory_4' },
  ];

  categoryOption = [
    { label: 'Category_1', value: 'Category_1' },
    { label: 'Category_2', value: 'Category_2' },
    { label: 'Category_3', value: 'Category_3' },
    { label: 'Category_4', value: 'Category_4' },
  ];

  districtOptions = [
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Kanya Kumari', value: 'Kanya Kumari' },
  ];

  divisionOptions = [
    { label: 'Division_1', value: 'Division_1' },
    { label: 'Division_2', value: 'Division_2' },
    { label: 'Division_3', value: 'Division_3' },
    { label: 'Division_4', value: 'Division_4' },
  ];

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM STATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editMode: boolean = false;
  editIndex: number | null = null;

  distributor: Distributor = {
    erpCode: '',
    town: null,
    mobile: '',
    distributorName: '',
    type: null,
    fieldOfficer: '',
    contactPerson: '',
    rate: null,
    password: '',
    email: '',
    city: null,
    headQuarters: '',
    territory: null,
    normValue: '',
    category: null,
    districtName: null,
    address: '',
    gstNo: '',
    userName: '',
    designation: '',
    dlNo: '',
    divisions: [],
  };

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM ACTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/distributor/distributor-master']);
    });
  }
  saveDistributorList() {
    if (!this.distributor.distributorName) {
      alert('Please fill all required fields.');
      return;
    }

    const distributorData = { ...this.distributor };

    const existingData = sessionStorage.getItem('Distributor-List-Data');
    let distributorListArray: any[] = [];

    try {
      distributorListArray = existingData ? JSON.parse(existingData) : [];
    } catch {
      distributorListArray = [];
    }

    if (this.editMode && this.editIndex !== null) {
      distributorListArray[this.editIndex] = distributorData;
      console.log('Updated Distributor', this.editIndex);
    } else {
      distributorListArray.push(distributorData);
      console.log('Added Distributor -->', distributorData);
    }

    sessionStorage.setItem(
      'Distributor-List-Data',
      JSON.stringify(distributorListArray)
    );

    this.closeCard();
  }
}

interface Distributor {
  erpCode: string;
  town: string | null;
  mobile: string;
  distributorName: string;
  type: string | null;
  fieldOfficer: string;
  contactPerson: string;
  rate: string | null;
  password: string;
  email: string;
  city: string | null;
  headQuarters: string;
  territory: string | null;
  normValue: string;
  category: string | null;
  districtName: string | null;
  address: string;
  gstNo: string;
  userName: string;
  designation: string;
  dlNo: string;
  divisions: string[];
}
