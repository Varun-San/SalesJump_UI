import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-super-sockiest-details',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './add-super-sockiest-details.component.html',
  styleUrl: './add-super-sockiest-details.component.css',
})
export class AddSuperSockiestDetailsComponent {
  get isAddSuperStockiest(): boolean {
    return this.router.url.includes(
      '/master/super-stockiest/super-stockiest-details/add-super-sockiest'
    );
  }

  //! Toggle password
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RETAILER FIELDS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editMode: boolean = false;
  editIndex: number | null = null;

  erpOptions = [
    { label: 'Yes', value: '1' },
    { label: 'No', value: '0' },
  ];

  stateOptions = [
    { label: 'TamilNadu', value: '1' },
    { label: 'Andhra', value: '0' },
  ];

  typeOptions = [
    { label: 'Type 1', value: '1' },
    { label: 'Type 2', value: '0' },
  ];

  subDivisionOption = [
    { label: 'Sub Division 1', value: '1' },
    { label: 'Sub Division 2', value: '0' },
  ];

  subDivisionOption2 = [
    { label: 'Sub Division_1', value: 1 },
    { label: 'Sub Division_2', value: 2 },
    { label: 'Sub Division_3', value: 3 },
    { label: 'Sub Division_4', value: 4 },
  ];

  superStockiest: SuperStockies = {
    name: '',
    contactPerson: '',
    erpcode: null,
    mobile: '',
    userName: '',
    password: '',
    state: null,
    fieldOfficer: '',
    gst: '',
    address: '',
    type: null,
    subDivision: null,
    subDivision2: [],
  };

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.superStockiest) {
      this.editMode = true;
      this.editIndex = nav.index;

      const stock = nav.superStockiest;

      this.superStockiest = {
        name: stock.name || '',
        contactPerson: stock.contactPerson || '',
        erpcode: stock.erpcode || '',
        mobile: stock.mobile || '',
        userName: stock.userName || '',
        password: stock.password || '',
        state: stock.state || '',
        fieldOfficer: stock.fieldOfficer || '',
        gst: stock.gst || '',
        address: stock.address || '',
        type: stock.type || '',
        subDivision: stock.subDivision || '',
        subDivision2: stock.subDivision2 || '',
      };
    }
  }

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([
        '/master/super-stockiest/super-stockiest-details/',
      ]);
    });
  }

  saveSuperStockiest() {
    // Basic validation
    if (
      !this.superStockiest.name ||
      !this.superStockiest.contactPerson ||
      !this.superStockiest.mobile
    ) {
      alert('Please fill all required fields.');
      return;
    }

    // Clone current data
    const stockiestData = { ...this.superStockiest };

    // Get existing data from sessionStorage
    const existingData = sessionStorage.getItem('super-stockiest-data');
    let stockiestArray: any[] = [];

    try {
      stockiestArray = existingData ? JSON.parse(existingData) : [];
    } catch {
      stockiestArray = [];
    }

    // Save or update logic
    if (this.editMode && this.editIndex !== null) {
      stockiestArray[this.editIndex] = stockiestData;
      console.log('Updated Super Stockiest at index', this.editIndex);
    } else {
      stockiestArray.push(stockiestData);
      console.log('Added new Super Stockiest');
    }

    // Store updated array
    sessionStorage.setItem(
      'super-stockiest-data',
      JSON.stringify(stockiestArray)
    );

    // Finalize
    this.closeCard(); // Make sure this method exists and works
  }
}

interface SuperStockies {
  name: string;
  contactPerson: string;
  erpcode?: string | null;
  mobile: number | string;
  userName: string;
  password: string;
  state?: string | null;
  fieldOfficer: string;
  gst: string;
  address: string;
  type?: string | null;
  subDivision?: string | null;
  subDivision2: string[];
}
