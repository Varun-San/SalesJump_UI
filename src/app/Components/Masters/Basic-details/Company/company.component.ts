import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    RouterLink,
    MatTooltipModule,
    RouterOutlet,
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
})
export class CompanyComponent {
  Array = Array;

  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  selectedCompany: { company: any; index: number } | null = null;

  companyList: {
    company_Name: string;
    alias_Name: string;
    company_City: string;
    company_State: string[];
    company_Status: string;
  }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const stored = sessionStorage.getItem('add_Company');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.companyList = dataArray.map((company: any) => ({
          company_Name: company.company_Name || '',
          alias_Name: company.alias_Name || '',
          company_City: company.company_City || '',
          company_State: company.company_State || [],
          company_Status: company.company_Status || 'Active',
        }));

        console.log('Loaded Companies:', this.companyList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for company data');
      }
    }
  }

  editCompany(company: any, index: number) {
    this.router.navigate(['/master/basic_details/add-company'], {
      state: { company, index },
    });
  }

  handleMenuAction(action: string) {
    if (!this.selectedCompany) return;

    switch (action) {
      case 'edit':
        this.editCompany(
          this.selectedCompany.company,
          this.selectedCompany.index
        );
        break;

      case 'deactivate':
        this.toggleCompanyStatus(this.selectedCompany.index);
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  toggleCompanyStatus(index: number) {
    const stored = sessionStorage.getItem('add_Company');
    if (!stored) return;
  
    let companies = JSON.parse(stored);
    const currentStatus = companies[index].company_Status || 'Active';
  
    companies[index].company_Status = currentStatus === 'Active' ? 'Inactive' : 'Active';
  
    console.log('Updated company status:', companies[index].company_Status); // Check the status update
  
    sessionStorage.setItem('add_Company', JSON.stringify(companies));
    this.ngOnInit(); // Refresh the list
    this.selectedCompany = null;
  }
  

  toggleFilterPopup() {
    this.showFilterPopup = !this.showFilterPopup;
  }

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  applyFilters() {
    this.activeFilters = { ...this.tempFilters };
    this.showFilterPopup = false;
  }

  cancelFilter() {
    this.tempFilters = { ...this.activeFilters };
    this.showFilterPopup = false;
  }

  clearFilter(type: 'status' | 'role') {
    this.activeFilters[type] = '';
    this.tempFilters[type] = '';
  }

  selectedHQ: any = null;

  openMenu(hq: any) {
    this.selectedHQ = hq;
  }
}
