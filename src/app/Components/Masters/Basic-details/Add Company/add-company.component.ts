import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-company',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css',
})
export class AddCompanyComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private router: Router) {
    this.loadEditStateFromNavigation();
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FLAGS & MODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editMode: boolean = false;
  editIndex: number | null = null;

  get isAddCompany(): boolean {
    return this.router.url.includes('master/basic_details/company/add-company');
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM FIELDS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  company_Name = '';
  alias_Name = '';
  company_City = '';
  company_State: string[] = [];
  company_Status = '';

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DROPDOWN OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  types: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM ACTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  removeSelected(value: string) {
    this.company_State = this.company_State.filter((item) => item !== value);
  }

  saveCompany() {
    if (
      !this.company_Name ||
      !this.alias_Name ||
      !this.company_City ||
      !this.company_State.length
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const companyData = {
      company_Name: this.company_Name,
      alias_Name: this.alias_Name,
      company_City: this.company_City,
      company_State: this.company_State,
    };

    let add_Company: any[] = [];

    try {
      const existingData = sessionStorage.getItem('add_Company');
      add_Company = existingData ? JSON.parse(existingData) : [];

      if (!Array.isArray(add_Company)) {
        add_Company = [];
      }
    } catch (e) {
      add_Company = [];
    }

    if (this.editMode && this.editIndex !== null) {
      add_Company[this.editIndex] = companyData;
    } else {
      add_Company.push(companyData);
    }

    sessionStorage.setItem('add_Company', JSON.stringify(add_Company));

    console.log(
      this.editMode ? 'Updated Company:' : 'Added Company:',
      companyData
    );

    this.closeCard();
  }

  closeCard() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/basic_details/company']);
    });
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATION STATE HANDLING <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  private loadEditStateFromNavigation() {
    const nav = history.state;

    if (nav && nav.company) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.company_Name = nav.company.company_Name || '';
      this.alias_Name = nav.company.alias_Name || '';
      this.company_City = nav.company.company_City || '';
      this.company_State = nav.company.company_State || [];
    }
  }
}
