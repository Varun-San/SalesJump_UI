import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu-permission',
  standalone: true, // add this
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    FontAwesomeModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-permission.component.html',
  styleUrl: './menu-permission.component.css',
})
export class MenuPermissionComponent {
  faSearch = faSearch;

  formData: selection = {
    companySelection: null,
  };
  companyOptions = ['SANeForce'];

  // ! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    TABS    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  tabs = [
    'Master',
    'Upload',
    'Entry',
    'Gamification',
    'Approvals',
    'Report',
    'Support',
  ];

  activeTab = this.tabs[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  //? ------------- SECTION MODULES -------------

  //  ! Master
  // BasicDetails = [
  //   { title: 'Company' },
  //   { title: 'Division' },
  //   { title: 'Designation' },
  //   { title: 'Head Quarters' },
  //   { title: 'Work Type' },
  //   { title: 'HO User' },
  //   { title: 'Currency' },
  // ];

  BasicDetails: ModuleItem[] = [
    { title: 'Company', checked: false },
    { title: 'Division', checked: false },
    { title: 'Designation', checked: false },
    { title: 'Head Quarters', checked: false },
    { title: 'Work Type', checked: false },
    { title: 'HO User', checked: false },
    { title: 'Currency', checked: false },
  ];

  // Geography = [
  //   { title: 'Area' },
  //   { title: 'Zone' },
  //   { title: 'Territory' },
  //   { title: 'District' },
  //   { title: 'Town' },
  // ];

  // Product = [
  //   { title: 'Product Detail' },
  //   { title: 'Category' },
  //   { title: 'Brand' },
  //   { title: 'UOM' },
  //   { title: 'Tax Allocation' },
  //   { title: 'Rate Entry Statewise' },
  //   { title: 'POP Material' },
  //   { title: 'Rate Card' },
  //   { title: 'Fixed Rate Card' },
  // ];

  // Retailer = [
  //   { title: 'Outlet Type' },
  //   { title: 'Class' },
  //   { title: 'Retailer Creation' },
  //   { title: 'Category' },
  // ];

  // SuperStockiest = [{ title: 'Super Stockiest Details' }];

  // Route = [{ title: 'Route List' }];

  // LeaveMaster = [{ title: 'Leave Type' }];

  // //  ! UPLOAD
  // Upload = [
  //   { title: 'Product Upload' },
  //   { title: 'Product Rate Upload' },
  //   { title: 'Distributor Upload' },
  //   { title: 'Route Upload' },
  //   { title: 'Retailer Upload' },
  //   { title: 'Target Upload' },
  //   { title: 'Primary Target Upload' },
  //   { title: 'Pending Bills Upload' },
  //   { title: 'Master Upload' },
  //   { title: 'Bulk User Upload' },
  //   { title: 'Tour Plan Upload' },
  // ];

  Geography: ModuleItem[] = [
    { title: 'Area', checked: false },
    { title: 'Zone', checked: false },
    { title: 'Territory', checked: false },
    { title: 'District', checked: false },
    { title: 'Town', checked: false },
  ];

  Product: ModuleItem[] = [
    { title: 'Product Detail', checked: false },
    { title: 'Category', checked: false },
    { title: 'Brand', checked: false },
    { title: 'UOM', checked: false },
    { title: 'Tax Allocation', checked: false },
    { title: 'Rate Entry Statewise', checked: false },
    { title: 'POP Material', checked: false },
    { title: 'Rate Card', checked: false },
    { title: 'Fixed Rate Card', checked: false },
  ];

  Retailer: ModuleItem[] = [
    { title: 'Outlet Type', checked: false },
    { title: 'Class', checked: false },
    { title: 'Retailer Creation', checked: false },
    { title: 'Category', checked: false },
  ];

  SuperStockiest: ModuleItem[] = [
    { title: 'Super Stockiest Details', checked: false },
  ];

  Route: ModuleItem[] = [{ title: 'Route List', checked: false }];

  LeaveMaster: ModuleItem[] = [{ title: 'Leave Type', checked: false }];

  Upload: ModuleItem[] = [
    { title: 'Product Upload', checked: false },
    { title: 'Product Rate Upload', checked: false },
    { title: 'Distributor Upload', checked: false },
    { title: 'Route Upload', checked: false },
    { title: 'Retailer Upload', checked: false },
    { title: 'Target Upload', checked: false },
    { title: 'Primary Target Upload', checked: false },
    { title: 'Pending Bills Upload', checked: false },
    { title: 'Master Upload', checked: false },
    { title: 'Bulk User Upload', checked: false },
    { title: 'Tour Plan Upload', checked: false },
  ];

  //  ! CHUNKED FOR THE ROW
  getChunkedMasters(items: any[], chunkSize: number) {
    const chunked = [];
    for (let i = 0; i < items.length; i += chunkSize) {
      chunked.push(items.slice(i, i + chunkSize));
    }
    return chunked;
  }

  parentToggles = {
    BasicDetails: false,
    Geography: false,
    Product: false,
    Retailer: false,
    SuperStockiest: false,
    Route: false,
    LeaveMaster: false,
    Upload: false,
  };

  toggleParent(section: keyof typeof this.parentToggles) {
    const newVal = !this.parentToggles[section];
    this.parentToggles[section] = newVal;

    this[section].forEach((item: ModuleItem) => (item.checked = newVal));
  }

  toggleChild(section: keyof typeof this.parentToggles) {
    const allChecked = this[section].every((item: ModuleItem) => item.checked);
    this.parentToggles[section] = allChecked;
  }

  trackByIndex(index: number) {
    return index;
  }

  trackByTitle(index: number, item: ModuleItem) {
    return item.title;
  }

  toggleChildTimeout: any;

  toggleChildLazy(section: keyof typeof this.parentToggles) {
    clearTimeout(this.toggleChildTimeout);
    this.toggleChildTimeout = setTimeout(() => {
      this.toggleChild(section);
    }, 50);
  }
}

interface selection {
  companySelection: string | null;
}

interface ModuleItem {
  title: string;
  checked?: boolean;
}
