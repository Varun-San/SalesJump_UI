import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  ActivatedRoute,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-approval-side-bar',
  imports: [FontAwesomeModule, CommonModule, MatChipsModule, RouterLink],
  templateUrl: './admin-approval-side-bar.component.html',
  styleUrl: './admin-approval-side-bar.component.css',
})
export class AdminApprovalSideBarComponent implements OnInit {
  showOptions = false;
  hoveredItem: string | null = null;
  faSearch = faSearch;

  tabs = ['Leave', 'Tour Plan', 'Attendance'];
  activeTab = this.tabs[0];

  activeChip_Leave: string = '';
  activeChip_TourPlan: string = '';
  activeChip_Attendance: string = '';

  Leave_label = [
    {
      name: 'Leave Approval',
      route: '/admin-approval/admin-leave-approval/leave-approval',
    },
    {
      name: 'Leave Cancellation',
      route: '/admin-approval/admin-leave-approval/cancellation',
    },
  ];

  TourPlan_Label = [
    {
      name: 'TP Approval',
      route: '/admin-approval/admin-tour-plan/tour-plan-approval',
    },
  ];

  Attendance_Label = [{ name: 'Missed Date Approval', route: '/approvals' }];

  tabUrlMap: { [key: string]: string } = {
    Leave: 'admin-leave-approval',
    'Tour Plan': 'admin-tour-plan',
    Attendance: 'attendance',
  };

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    // On initial load
    this.updateActiveFromUrl(this.router.url);

    // Listen for navigation changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateActiveFromUrl(event.urlAfterRedirects);
      });
  }

  updateActiveFromUrl(currentUrl: string) {
    // Update tab
    const tabFromUrl = this.getActiveTabFromUrl(currentUrl);
    if (tabFromUrl) {
      this.activeTab = tabFromUrl;
    }

    // Update chips
    this.activeChip_Leave = this.getActiveChip(this.Leave_label) || '';
    this.activeChip_TourPlan = this.getActiveChip(this.TourPlan_Label) || '';
    this.activeChip_Attendance =
      this.getActiveChip(this.Attendance_Label) || '';
  }

  getActiveTabFromUrl(url: string): string | null {
    for (const [tab, pathFragment] of Object.entries(this.tabUrlMap)) {
      if (url.includes(pathFragment)) {
        return tab;
      }
    }
    return null;
  }

  getActiveChip(chipList: { name: string; route: string }[]): string | null {
    const currentUrl = this.router.url;
    const match = chipList.find((chip) => currentUrl.includes(chip.route));
    return match ? match.name : null;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    // Optional: Navigate to first chip of that tab
    const chipList =
      tab === 'Leave'
        ? this.Leave_label
        : tab === 'Tour Plan'
        ? this.TourPlan_Label
        : this.Attendance_Label;

    if (chipList.length) {
      this.router.navigate([chipList[0].route]);
    }
  }
}
