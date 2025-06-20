import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterOutlet,
  ActivatedRoute,
} from '@angular/router'; // Import Router
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rate-card',
  imports: [
    FontAwesomeModule,
    CommonModule,
    MatChipsModule,
    FormsModule,
    NgSelectModule,
  ],
  templateUrl: './rate-card.component.html',
  styleUrl: './rate-card.component.css',
})
export class RateCardComponent {
  // ! FOR ACTIVE CHIPS
  constructor(private router: Router, private ActiveRoute: ActivatedRoute) {}

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  // Master list merged into tabs
  tabs = ['Primary', 'Secondary', 'Counter Sale'];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // !  OPTIONS FOR PRIMARY

  primaryModeOptions = [
    { label: 'Online', value: 'Online' },
    { label: 'Offline', value: 'Offline' },
  ];
  primaryRateOptions = [
    { label: '1000', value: '1000' },
    { label: '100000', value: '100000' },
  ];
  primaryDivisionOptions = [
    { label: 'Divisoin 1', value: 'Divisoin 1' },
    { label: 'Division 2', value: 'Division 2' },
  ];
  primaryStateOptions = [
    { label: 'State 1', value: 'State 1' },
    { label: 'State 2', value: 'State 2' },
  ];
  primaryDistrictOptions = [
    { label: 'District 1', value: 'District 1' },
    { label: 'District 2', value: 'District 2' },
  ];

  // ! OPTIONS FOR SECONDARY
  secondaryModeOptions = [
    { label: 'Cash', value: 'Cash' },
    { label: 'Credit', value: 'Credit' },
  ];
  secondaryRateOptions = [
    { label: '2000', value: '2000' },
    { label: '5000', value: '5000' },
  ];
  secondaryDivisionOptions = [
    { label: 'Division A', value: 'Division A' },
    { label: 'Division B', value: 'Division B' },
  ];
  secondaryStateOptions = [
    { label: 'State X', value: 'State X' },
    { label: 'State Y', value: 'State Y' },
  ];
  secondaryDistrictOptions = [
    { label: 'District X1', value: 'District X1' },
    { label: 'District Y1', value: 'District Y1' },
  ];
  secondaryDistributorOptions = [
    { label: 'Distributor 1', value: 'Distributor 1' },
    { label: 'Distributor 2', value: 'Distributor 2' },
  ];
  secondaryRetailerCategoryOptions = [
    { label: 'Category A', value: 'Category A' },
    { label: 'Category B', value: 'Category B' },
  ];
  secondaryRetailerOptions = [
    { label: 'Retailer A', value: 'Retailer A' },
    { label: 'Retailer B', value: 'Retailer B' },
  ];

  // ! OPTIONS FOR COUNTER SALE
  counterModeOptions = [
    { label: 'Walk-in', value: 'Walk-in' },
    { label: 'Drive-through', value: 'Drive-through' },
  ];
  counterRateOptions = [
    { label: '1500', value: '1500' },
    { label: '2500', value: '2500' },
  ];
  counterDivisionOptions = [
    { label: 'Division CS1', value: 'Division CS1' },
    { label: 'Division CS2', value: 'Division CS2' },
  ];
  counterStateOptions = [
    { label: 'State CS1', value: 'State CS1' },
    { label: 'State CS2', value: 'State CS2' },
  ];
  counterDistrictOptions = [
    { label: 'District CS1', value: 'District CS1' },
    { label: 'District CS2', value: 'District CS2' },
  ];

  // !  HANDLING IN DYNAMICALLY

  tabConfigs: TabConfig[] = [
    {
      name: 'Primary',
      fields: [
        {
          label: 'Mode',
          id: 'mode',
          required: true,
          items: this.primaryModeOptions,
        },
        {
          label: 'Rate',
          id: 'rate',
          required: true,
          items: this.primaryRateOptions,
        },
        {
          label: 'Division',
          id: 'division',
          required: true,
          items: this.primaryDivisionOptions,
        },
        {
          label: 'State',
          id: 'state',
          required: true,
          items: this.primaryStateOptions,
        },
        {
          label: 'District',
          id: 'district',
          required: true,
          items: this.primaryDistrictOptions,
        },
      ],
    },
    {
      name: 'Secondary',
      fields: [
        {
          label: 'Mode',
          id: 'mode',
          required: true,
          items: this.secondaryModeOptions,
        },
        {
          label: 'Rate',
          id: 'rate',
          required: true,
          items: this.secondaryRateOptions,
        },
        {
          label: 'Division',
          id: 'division',
          required: true,
          items: this.secondaryDivisionOptions,
        },
        {
          label: 'State',
          id: 'state',
          required: true,
          items: this.secondaryStateOptions,
        },
        {
          label: 'District',
          id: 'district',
          required: true,
          items: this.secondaryDistrictOptions,
        },
        {
          label: 'Distributor',
          id: 'distributor',
          required: true,
          items: this.secondaryDistributorOptions,
        },
        {
          label: 'Retailer Category',
          id: 'retailerCategory',
          required: true,
          items: this.secondaryRetailerCategoryOptions,
        },
        {
          label: 'Retailer',
          id: 'retailer',
          required: true,
          items: this.secondaryRetailerOptions,
        },
      ],
    },
    {
      name: 'Counter Sale',
      fields: [
        {
          label: 'Mode',
          id: 'mode',
          required: true,
          items: this.counterModeOptions,
        },
        {
          label: 'Rate',
          id: 'rate',
          required: true,
          items: this.counterRateOptions,
        },
        {
          label: 'Division',
          id: 'division',
          required: true,
          items: this.counterDivisionOptions,
        },
        {
          label: 'State',
          id: 'state',
          required: true,
          items: this.counterStateOptions,
        },
        {
          label: 'District',
          id: 'district',
          required: true,
          items: this.counterDistrictOptions,
        },
      ],
    },
  ];

  get currentTabConfig(): TabConfig | undefined {
    return this.tabConfigs.find((tab) => tab.name === this.activeTab);
  }

  getFormModel(): any {
    switch (this.activeTab) {
      case 'Primary':
        return this.primaryData;
      case 'Secondary':
        return this.secondaryData;
      case 'Counter Sale':
        return this.counterSaleData;
      default:
        return {};
    }
  }
  // !  HANDLING SAVE
  primaryData: any = {};
  secondaryData: any = {};
  counterSaleData: any = {};

  save() {
    switch (this.activeTab) {
      case 'Primary':
        this.savePrimary(this.primaryData);
        break;
      case 'Secondary':
        this.saveSecondary(this.secondaryData);
        break;
      case 'Counter Sale':
        this.saveCounterSale(this.counterSaleData);
        break;
      default:
        console.warn('No tab selected');
    }
  }
  savePrimary(data: any) {
    console.log('Saving Primary:', data);
    sessionStorage.setItem('primaryData', JSON.stringify(data));
  }

  saveSecondary(data: any) {
    console.log('Saving Secondary:', data);
    sessionStorage.setItem('secondaryData', JSON.stringify(data));
  }

  saveCounterSale(data: any) {
    console.log('Saving Counter Sale:', data);
    sessionStorage.setItem('counterSaleData', JSON.stringify(data));
  }
  ngOnInit() {
    const primary = sessionStorage.getItem('primaryData');
    if (primary) {
      this.primaryData = JSON.parse(primary);
    }

    const secondary = sessionStorage.getItem('secondaryData');
    if (secondary) {
      this.secondaryData = JSON.parse(secondary);
    }

    const counter = sessionStorage.getItem('counterSaleData');
    if (counter) {
      this.counterSaleData = JSON.parse(counter);
    }
  }
}

export interface FormField {
  label: string;
  id: string;
  required?: boolean;
  items: any[];
}

export interface TabConfig {
  name: string;
  fields: FormField[];
}
