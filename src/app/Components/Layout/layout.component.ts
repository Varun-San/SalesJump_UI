import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MasterSideBarComponent } from '../Masters/Master Side Bar/master-side-bar.component';
import { SettingsSideBarComponent } from '../Setup/Configuration/Settings Side Bar/settings-side-bar.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbService } from '../../Services/breadcrumb.service';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    MatTooltipModule,
    CommonModule,
    MasterSideBarComponent,
    SettingsSideBarComponent,
    FontAwesomeModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  faSearch = faSearch;
  hoveredItem: string | null = null;

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  togglePopup(item: string): void {
    this.hoveredItem = this.hoveredItem === item ? null : item;
  }

  menuItems = [
    { label: 'Home', route: '/home', icon: 'Assets/LayoutIcons/Home.svg' },
    {
      label: 'Master',
      route: 'master/',
      icon: 'Assets/LayoutIcons/Master.svg',
    },
    { label: 'Entry', route: '/entry', icon: 'Assets/LayoutIcons/Entry.svg' },
    { label: 'Upload', route: '#', icon: 'Assets/LayoutIcons/Upload.svg' },
    { label: 'Approval', route: '#', icon: 'Assets/LayoutIcons/Approval.svg' },
    { label: 'Reports', route: '#', icon: 'Assets/LayoutIcons/Reports.svg' },
    {
      label: 'Settings',
      route: 'configuration',
      icon: 'Assets/LayoutIcons/Settings.svg',
    },
    {
      label: 'Gamification',
      route: '#',
      icon: 'Assets/LayoutIcons/Gamefication.svg',
    },
  ];

  getHeaderText() {
    return this.breadcrumbService.getBreadcrumbs(this.router.url);
  }
}
