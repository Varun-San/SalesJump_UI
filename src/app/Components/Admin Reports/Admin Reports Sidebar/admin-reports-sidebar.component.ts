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
  selector: 'app-admin-reports-sidebar',
  imports: [FontAwesomeModule, CommonModule, MatChipsModule, RouterLink],
  templateUrl: './admin-reports-sidebar.component.html',
  styleUrl: './admin-reports-sidebar.component.css',
})
export class AdminReportsSidebarComponent {
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
    this.activeChip_Leave = this.getActiveChip(this.leave_label) || '';
    this.activeTab = this.getActiveTabFromUrl(currentUrl) || this.tabs[0];
  }

  tabUrlMap: { [key: string]: string } = {
    Leave: 'admin-reports-leave',
    'Tour Plan': '',
    Attendance: '',
    Resources: '',
    'Primary Order': '',
    'Secondary Order': '',
    Inventory: '',
    Purchase: '',
    Retail: '',
    'Target Achievement': '',
    Sale: '',
    Activity: '',
    'Retailer Management': '',
  };
  getActiveTabFromUrl(url: string): string | null {
    for (const [tab, pathFragment] of Object.entries(this.tabUrlMap)) {
      if (url.includes(pathFragment)) {
        return tab;
      }
    }
    return null;
  }

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Master list merged into tabs
  tabs = [
    'Leave',
    'Tour Plan',
    'Resources',
    'Attendance',
    'Primary Order',
    'Secondary Order',
    'Inventory',
    'Purchase',
    'Retail',
    'Target Achievement',
    'Sale',
    'Activity',
    'Retailer Management',
  ];

  activeTab = this.tabs[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  //! Leave Options--
  activeChip_Leave: string = '';
  leave_label = [
    {
      name: 'Availability Status',
      route: '/admin-reports/admin-reports-leave/availability-status',
    },
    {
      name: 'Leave Card',
      route: '/admin-reports/admin-reports-leave/leave-card',
    },
    {
      name: 'Leave Status',
      route: '/admin-reports/admin-reports-leave/leave-status',
    },
  ];
}
