import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
// Drop down
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeModule,
    CommonModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css'],
})
export class GeneralSettingsComponent {
  faSearch = faSearch;

  tabs = [
    'Basic',
    'Mobile App Settings',
    'Retailer & Secondary',
    'Distributor & Primary',
    'Tour Plan',
    'Inshop',
    'Expense',
    'Scheme',
    'Merchandise',
    'Caption',
    'Attendance & Leave',
    'Reports',
    'Route',
  ];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  disableSelect = new FormControl(false);

  currencies = [
    { name: 'Indian Rupee', symbol: '₹' },
    { name: 'US Dollar', symbol: '$' },
    { name: 'Euro', symbol: '€' },
    { name: 'British Pound', symbol: '£' },
    { name: 'Japanese Yen', symbol: '¥' },
  ];

  selectedCurrency = this.currencies[0]; // Default selected currency
}
