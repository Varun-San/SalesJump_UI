import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterOutlet,
  ActivatedRoute,
} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-entry-side-bar',
  imports: [FontAwesomeModule, CommonModule, MatChipsModule, RouterLink],
  templateUrl: './admin-entry-side-bar.component.html',
  styleUrl: './admin-entry-side-bar.component.css',
})
export class AdminEntrySideBarComponent {
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
    this.activeChip_Leave = this.getActiveChip(this.Leave_label) || '';
  }

  tabUrlMap: { [key: string]: string } = {
    Leave: 'leave',
    'Secondary Target': 'secondary_target',
    'Primary Target': 'primary_target',
    Transfer: 'transfer',
    'Primary Order': 'primary_order',
    'Secondary Order': 'secondary_order',
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
    'Secondary Target',
    'Primary Target',
    'Transfer',
    'Primary Order',
    'Secondary Order',
  ];

  activeTab = this.tabs[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  //! Leave Options--
  activeChip_Leave: string = '';
  Leave_label = [
    { name: 'Leave Entry', route: '/entry/leave/leave_entry' },
    { name: 'Leave Eligibility', route: '/entry/leave/leave_eligibility' },
  ];
}
