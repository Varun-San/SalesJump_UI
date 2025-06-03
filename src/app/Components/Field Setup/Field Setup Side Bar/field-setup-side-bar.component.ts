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
  selector: 'app-field-setup-side-bar',
  imports: [FontAwesomeModule, CommonModule, MatChipsModule, RouterLink],
  templateUrl: './field-setup-side-bar.component.html',
  styleUrl: './field-setup-side-bar.component.css',
})
export class FieldSetupSideBarComponent {
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
    this.activeChip_Field_Setup =
      this.getActiveChip(this.Field_Setup_label) || '';
    this.activeTab = this.getActiveTabFromUrl(currentUrl) || this.tabs[0];
  }

  tabUrlMap: { [key: string]: string } = {
    'Field Setup': 'field-setup',
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
  list = [{ name: 'Field Setup', route: '/field-setup' }];

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Tabs

  // Master list merged into tabs
  tabs = ['Field Setup'];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // !  FIELD SETUP OPTIONS:
  activeChip_Field_Setup: string = '';
  Field_Setup_label = [
    { name: 'General Settings', route: '/field-setup/fs-general-settings' },
    { name: 'User Wise Settings', route: '/field-setup/fs-user-settings' },
  ];
}
