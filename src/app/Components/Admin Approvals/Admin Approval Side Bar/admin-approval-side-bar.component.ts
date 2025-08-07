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
  selector: 'app-admin-approval-side-bar',
  imports: [FontAwesomeModule, CommonModule, MatChipsModule, RouterLink],
  templateUrl: './admin-approval-side-bar.component.html',
  styleUrl: './admin-approval-side-bar.component.css',
})
export class AdminApprovalSideBarComponent {
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
    'Tour Plan': 'tour_plan',
    Attendance: 'attendance',
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
  tabs = ['Leave', 'Tour Plan', 'Attendance'];

  activeTab = this.tabs[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  //! Leave Options--
  activeChip_Leave: string = '';
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

  // ! Tour Plan Options ---
  activeChip_TourPlan: string = '';
  TourPlan_Label = [
    {
      name: 'TP Approval',
      route: '/approvals',
    },
  ];

  // ! Attendance Options ---
  activeChip_Attendance: string = '';
  Attendance_Label = [
    {
      name: 'Missed Date Approval',
      route: '/approvals',
    },
  ];
}
