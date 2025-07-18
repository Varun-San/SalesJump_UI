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
  selector: 'app-upload-side-bar',
  imports: [FontAwesomeModule, CommonModule, MatChipsModule, RouterLink],
  templateUrl: './upload-side-bar.component.html',
  styleUrl: './upload-side-bar.component.css',
})
export class UploadSideBarComponent {
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
    this.activeChip_Upload = this.getActiveChip(this.Upload_label) || '';
  }

  tabUrlMap: { [key: string]: string } = {
    Upload: 'upload',
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
  list = [{ name: 'Upload', route: '/upload' }];

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Master list merged into tabs
  tabs = ['Uploads'];

  activeTab = this.tabs[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  //! Basic Details Options--
  activeChip_Upload: string = '';
  Upload_label = [
    { name: 'Product Upload', route: '/master/basic_details/company' },
    {
      name: 'Product Rate Upload',
      route: '/master/basic_details/company',
    },
    {
      name: 'Distributor Upload',
      route: '/master/basic_details/company',
    },
    {
      name: 'Route Upload',
      route: '/master/basic_details/company',
    },
    {
      name: 'Target Upload',
      route: '/master/basic_details/company',
    },
    {
      name: 'Primary Target Upload',
      route: '/master/basic_details/company',
    },
    {
      name: 'Pending Bills Upload',
      route: '/master/basic_details/company',
    },
    {
      name: 'Pending Bills Upload',
      route: '/master/basic_details/company',
    },
    {
      name: 'Master Upload',
      route: '/master/basic_details/company',
    },
    {
      name: 'Bulk User Upload',
      route: '/master/basic_details/company',
    },
    {
      name: 'Tour Plan Upload',
      route: '/master/basic_details/company',
    },
  ];
}
