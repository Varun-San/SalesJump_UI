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
  selector: 'app-settings-side-bar',
  imports: [FontAwesomeModule, CommonModule, MatChipsModule, RouterLink],
  templateUrl: './settings-side-bar.component.html',
  styleUrl: './settings-side-bar.component.css',
})
export class SettingsSideBarComponent {
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
    this.activeChip_Configuration =
      this.getActiveChip(this.Configuration_Label) || '';
    this.activeTab = this.getActiveTabFromUrl(currentUrl) || this.tabs[0];
  }

  tabUrlMap: { [key: string]: string } = {
    Configuration: 'Settings',
  };
  getActiveTabFromUrl(url: string): string | null {
    for (const [tab, pathFragment] of Object.entries(this.tabUrlMap)) {
      if (url.includes(pathFragment)) {
        return tab;
      }
    }
    return null;
  }

  list = [{ name: 'Settings', route: '/master' }];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  
  tabs = ['Settings'];

  activeTab = this.tabs[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  //! Configuration Options--
  activeChip_Configuration: string = '';
  Configuration_Label = [
    { name: 'General Settings', route: 'configuration/general-settings' },
    { name: 'UserWise Settings', route: 'configuration/user-settings' },
  ];
}
