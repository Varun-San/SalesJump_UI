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

  //! ------------- SECTION MODULES -------------

  // Basic_Settings

  Basic_Settings = [
    { title: 'Door To Door', description: 'Enable Door to Door' },
    {
      title: 'Brand Availability',
      description: 'Brand Availability / Manager Preview',
      hasRadio: true,
    },
    { title: 'Self / Joint Work', description: 'Enable Joint Work' },
    { title: 'Edit Calls', description: 'Allow to edit Submitted calls' },
    {
      title: 'Day End Remarks',
      description: 'Enable Remarks to add any Feedback for the day',
    },
    {
      title: 'Day Start Time',
      description: 'Capture Start time of work in the field activity',
    },
    {
      title: 'Day End Time',
      description: 'Capture End time of work in the field activity',
    },
    {
      title: 'Missed Date Entry',
      description: 'Capture Start time of work in the field activity',
    },
    {
      title: 'Remarks with Audio',
      description: 'Enable Audio Remarks in call submission',
    },
    {
      title: 'Product Survey',
      description: 'Enable Option to add competitor details (Secondary option)',
    },
    {
      title: 'Choose Currency Type',
      description: 'Allow to Change Currency type',
      hasDropdown: true,
    },
    { title: 'Custom Form', description: 'Create Custom Form' },
    {
      title: 'Payment Collection',
      description: 'Enables payment collection option (Secondary Option)',
    },
    {
      title: 'Mobile Number Digit Length',
      description: 'Define number of digits required in mobile number field',
    },
  ];

  currencies = [
    { name: 'Indian Rupee', symbol: '₹' },
    { name: 'US Dollar', symbol: '$' },
    { name: 'Euro', symbol: '€' },
    { name: 'British Pound', symbol: '£' },
    { name: 'Japanese Yen', symbol: '¥' },
  ];

  selectedCurrency = this.currencies[0]; // Default selected currency

  //? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // Mobile_App_Settings

  isGeoTaggingEnabled: boolean = false;

  Mobile_App_Settings = [
    {
      title: 'Product Detailing',
      description:
        'Product detailing for digital promotion to customer (video, images, pdf)',
      isEnabled: false,
      isInputField: false, // Ensures consistency
      isEditing: false,
      inputValue: '',
    },
    {
      title: 'Battery Status Need',
      description: "Show's User Mobile battery Status",
      isEnabled: false,
      isInputField: false,
      isEditing: false,
      inputValue: '',
    },
    {
      title: 'Geo Tagging',
      description: 'Geo Tagging Option enable in App',
      isEnabled: false, // Track the toggle state
      isInputField: false,
      isEditing: false,
      inputValue: '',
    },
  ];

  Dependent_Geo_Settings = [
    {
      title: 'Geo-Fencing Radius (in KM)',
      description: 'Radius around which fencing will work',
      isInputField: true,
      inputValue: '',
      isEditing: false,
    },
    {
      title: 'Geo-Fencing Retailer Tag',
      description: 'User cannot submit order if the Retailer is not tagged.',
      isInputField: false,
      isEditing: false,
      inputValue: '',
    },
    {
      title: 'Show map in Retailer selection',
      description: 'This setup is used to show map in Retailer selection',
      isInputField: false,
      isEditing: false,
      inputValue: '',
    },
  ];

  onGeoTaggingChange(title: string, isEnabled: boolean) {
    if (title === 'Geo Tagging') {
      this.isGeoTaggingEnabled = isEnabled;
    }
  }

  //? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // Retailer_Secondary

  Retailer_Secondary = [
    { title: 'CL Qty', description: 'Enable Option in Secondary order entry' },
    {
      title: 'Rate Edit',
      description: 'Allow user to edit in secondary order entry',
    },
    {
      title: 'Customer Feedback',
      description: 'Confirmation to know dispatch status',
    },
    {
      title: 'Product Detailing',
      description:
        'Product detailing for digital promotion to customer (Video, images, pdf)',
    },
    {
      title: 'EmptywaterCan return option',
      description: 'User can Access return option for orders',
    },
    {
      title: 'Product Rate Card',
      description: 'Rate based on margin/Fixed Rate',
    },
    {
      title: 'Add New Retailer',
      description: 'Allow field users to add new retailer',
    },
    {
      title: 'Retailer Image Attachment',
      description:
        'Allow field users to add attachment while adding new retailer',
    },
    {
      title: 'Add New Retailer based on route count',
      description: 'Add retailer based on Maximum Route Outlet Count',
      isInputField: true,
      inputValue: '',
    },
  ];

  //? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // Distributor_Primary

  Distributor_Primary = [
    {
      title: 'Primary Order',
      description: 'Enable Primary Order',
      isEnabled: false,
    },
    {
      title: 'Add New Distributor',
      description: 'Allow field users to add new distributor',
      isEnabled: false,
    },
  ];

  Dependent_Primary_Order = [
    {
      title: 'Rate Edit Primary Order',
      description: 'Allow user to edit in Primary order entry',
    },
  ];

  Dependent_New_Distributor = [
    {
      title: 'Rate Edit New Distributor',
      description: 'Allow user to edit in Primary order entry',
    },
  ];

  isPrimaryOrderEnabled: boolean = false;
  isNewDistributorEnabled: boolean = false;

  // ✅ Update only the relevant toggle state
  onPrimaryOrderChange(title: string, isEnabled: boolean) {
    if (title === 'Primary Order') {
      this.isPrimaryOrderEnabled = isEnabled;
    } else if (title === 'Add New Distributor') {
      this.isNewDistributorEnabled = isEnabled;
    }
  }
}
