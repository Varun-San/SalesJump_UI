import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MastersComponent } from '../Masters/masters.component';
import { MasterSideBarComponent } from '../Masters/Master Side Bar/master-side-bar.component';
import { SettingsSideBarComponent } from '../Setup/Configuration/Settings Side Bar/settings-side-bar.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    MatTooltipModule,
    CommonModule,
    MastersComponent,
    MasterSideBarComponent,
    SettingsSideBarComponent,
    FontAwesomeModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  constructor(private router: Router) {}

  faSearch = faSearch;

  menuItems = [
    { label: 'Home', route: '/home', icon: 'Assets/LayoutIcons/Home.svg' },
    {
      label: 'Master',
      route: '/master',
      icon: 'Assets/LayoutIcons/Master.svg',
    },
    { label: 'Entry', route: '/entry', icon: 'Assets/LayoutIcons/Entry.svg' },
    {
      label: 'Upload',
      route: '/upload',
      icon: 'Assets/LayoutIcons/Upload.svg',
    },
    {
      label: 'Approval',
      route: '/approval',
      icon: 'Assets/LayoutIcons/Approval.svg',
    },
    {
      label: 'Reports',
      route: '/reports',
      icon: 'Assets/LayoutIcons/Reports.svg',
    },
    {
      label: 'Settings',
      route: '/configuration',
      icon: 'Assets/LayoutIcons/Settings.svg',
    },
  ];

  hoveredItem: string | null = null;

  getHeaderText(): { label: string; route: string }[] | null {
    const currentRoute = this.router.url;

    if (currentRoute.includes('/general-settings')) {
      return [
        { label: 'Setup', route: '/setup' },
        { label: 'Configuration', route: '/configuration' },
        { label: 'General Settings', route: '/configuration/general-settings' },
      ];
    } else if (currentRoute.includes('/user-settings')) {
      return [
        { label: 'Setup', route: '/setup' },
        { label: 'Configuration', route: '/configuration' },
        { label: 'User Settings', route: '/configuration/user-settings' },
      ];
    } else if (
      currentRoute.includes('/configuration') &&
      !currentRoute.includes('/general-settings') &&
      !currentRoute.includes('/user-settings')
    ) {
      return [
        { label: 'Setup', route: '/setup' },
        { label: 'Configuration', route: '/configuration' },
      ];
    } else if (currentRoute.includes('/master/basic_details')) {
      return [
        { label: 'Master', route: '/master' },
        { label: 'Basic Details', route: '/master/basic_details' },
      ];
    } else if (currentRoute.includes('/master')) {
      return [{ label: 'Master', route: '/master' }];
    } else {
      return null; // No header displayed
    }
  }
}
