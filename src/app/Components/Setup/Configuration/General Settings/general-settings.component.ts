import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, CommonModule],
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
}
