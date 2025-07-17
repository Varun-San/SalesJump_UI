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

@Component({
  selector: 'app-master-side-bar',
  imports: [FontAwesomeModule, CommonModule, MatChipsModule, RouterLink],
  templateUrl: './master-side-bar.component.html',
  styleUrl: './master-side-bar.component.css',
})
export class MasterSideBarComponent {
  showOptions = false;
  hoveredItem: string | null = null;
  faSearch = faSearch;

  // ! FOR ACTIVE CHIPS
  constructor(private router: Router, private ActiveRoute: ActivatedRoute) {}

  getActiveChip(chipList: { name: string; route: string }[]): string | null {
    const currentUrl = this.router.url;
    const match = chipList.find((chip) => currentUrl.includes(chip.route));
    return match ? match.name : null;
  }

  ngOnInit() {
    const currentUrl = this.router.url;
    this.activeChip_Basic = this.getActiveChip(this.BasicDetails_label) || '';
    this.activeChip_Geography = this.getActiveChip(this.Geography_label) || '';
    this.activeChip_Product = this.getActiveChip(this.Product_label) || '';
    this.activeChip_leaveMaster =
      this.getActiveChip(this.LeaveMaster_label) || '';
    this.activeChip_Retailer = this.getActiveChip(this.Retailer_label) || '';
    this.activeChip_SuperStockiest =
      this.getActiveChip(this.superStockiest_label) || '';
    this.activeChip_route = this.getActiveChip(this.route_label) || '';
    this.activeChip_distributor =
      this.getActiveChip(this.distributor_label) || '';
    this.activeChip_fieldForce =
      this.getActiveChip(this.fieldForce_label) || '';
    this.activeTab = this.getActiveTabFromUrl(currentUrl) || this.tabs[0];
  }

  tabUrlMap: { [key: string]: string } = {
    'Basic Details': 'basic_details',
    Geography: 'geography',
    Merchandising: 'merchandising',
    Product: 'product',
    Employee: 'employee',
    Retailer: 'retailer',
    'Super Stockiest': 'super-stockiest',
    Route: 'route',
    Distributor: 'distributor',
    Tax: 'tax',
    'HO Creation': 'ho-creation',
    Competitor: 'competitor',
    'Van Sales': 'van-sales',
    'Field Force': 'field-force',
    'Leave Master': 'leave-master',
  };
  getActiveTabFromUrl(url: string): string | null {
    for (const [tab, pathFragment] of Object.entries(this.tabUrlMap)) {
      if (url.includes(pathFragment)) {
        return tab;
      }
    }
    return null;
  }
  // Master list with routes
  list = [
    { name: 'Basic Details', route: '/master' },
    { name: 'Geography', route: '/master' },
    { name: 'Merchandising', route: '/master' },
    { name: 'Product', route: '/master' },
    { name: 'Employee', route: '/master' },
    { name: 'Retailer', route: '/master' },
    { name: 'Super Stockiest', route: '/master' },
    { name: 'Route', route: '/master' },
    { name: 'Distributor', route: '/master' },
    { name: 'Tax', route: '/master' },
    { name: 'HO Creation', route: '/master' },
    { name: 'Competitor', route: '/master' },
    { name: 'Van Sales', route: '/master' },
    { name: 'Field Force', route: '/master' },
    { name: 'Leave Master', route: '/master' },
  ];

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Master list merged into tabs
  tabs = [
    'Basic Details',
    'Geography',
    'Product',
    'Merchandising',
    'Employee',
    'Retailer',
    'Super Stockiest',
    'Route',
    // 'Distributor',
    'Tax',
    'HO Creation',
    'Competitor',
    'Van Sales',
    // 'Field Force',
    'Scheme',
    'Expense',
    'Communication',
    'Custom Forms',
    'Leave Master',
  ];

  activeTab = this.tabs[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  //! Basic Details Options--
  activeChip_Basic: string = '';
  BasicDetails_label = [
    { name: 'Company', route: '/master/basic_details/company' },
    { name: 'Division', route: '/master/basic_details/division' },
    { name: 'Designation', route: '/master/basic_details/designation' },
    { name: 'Head Quarters', route: '/master/basic_details/head-quarters' },
    { name: 'Work Type', route: '/master/basic_details/work-type' },
    { name: 'HO User', route: '/master/basic_details/ho-user' },
    { name: 'Currency', route: '/master/basic_details/currency' },
  ];

  //! Geography
  activeChip_Geography: string = '';
  Geography_label = [
    { name: 'Area', route: '/master/geography/area' },
    { name: 'Zone', route: '/master/geography/zone' },
    { name: 'Territory', route: '/master/geography/territory' },
    { name: 'District', route: '/master/geography/district' },
    { name: 'Town', route: '/master/geography/town' },
  ];

  //! Product
  activeChip_Product: string = '';
  Product_label = [
    { name: 'Product detail', route: '/master/product/product-details' },
    { name: 'Category', route: '/master/product/category' },
    { name: 'Brand', route: '/master/product/brand' },
    { name: 'UOM', route: '/master/product/uom' },
    { name: 'Tax Allocation', route: '/master/product/tax-allocation' },
    { name: 'Rate Entry Statewise', route: '/master/product/rate-entry' },
    { name: 'POP Material', route: '/master/product/pop-material' },
    { name: 'Rate Card', route: '/master/product/rate-card' },
    { name: 'Fixed Rate Card', route: '/master/product/fixed-rate-card' },
  ];

  //! Leave Master
  activeChip_leaveMaster: string = '';
  LeaveMaster_label = [
    { name: 'Leave Type', route: '/master/leave-master/leave-type' },
  ];

  // !  RETAILER
  activeChip_Retailer: string = '';
  Retailer_label = [
    { name: 'Outlet Type', route: 'master/retailer/retailer-outlet-type' },
    { name: 'Class', route: 'master/retailer/retailer-class' },
    { name: 'Retailer Creation', route: 'master/retailer/retailer-creation' },
    { name: 'Category', route: 'master/retailer/retailer-category' },
  ];

  //! Gamification
  activeChip_Gamification: string = '';
  Gamification_label = [
    { name: 'Competitions', route: '/master/gamification/competitions' },
    { name: 'Formula', route: '/master/gamification/formula' },
    { name: 'Rewards', route: '/master/gamification/rewards' },
    { name: 'Levels', route: '/master/gamification/levels' },
  ];

  // !  SUPER STOCKIEST
  activeChip_SuperStockiest: string = '';
  superStockiest_label = [
    {
      name: 'Super Stockies Details',
      route: 'master/super-stockiest/super-stockiest-details',
    },
  ];

  // !  ROUTE
  activeChip_route: string = '';
  route_label = [{ name: 'Route List', route: 'master/route/route-list' }];

  // !  FIELD FORCE
  activeChip_fieldForce: string = '';
  fieldForce_label = [
    { name: 'Field Force', route: 'master/field-force/field-force-t' },
  ];

  // !  DISTRIBUTORS
  activeChip_distributor: string = '';
  distributor_label = [
    {
      name: 'Distributor Master',
      route: 'master/distributor/distributor-master',
    },
  ];
}
