import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MasterSideBarComponent } from '../Masters/Master Side Bar/master-side-bar.component';
import { SettingsSideBarComponent } from '../Setup/Configuration/Settings Side Bar/settings-side-bar.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbService } from '../../Services/breadcrumb.service';
import { FieldSetupSideBarComponent } from '../Field Setup/Field Setup Side Bar/field-setup-side-bar.component';
import { UploadSideBarComponent } from '../Upload/Upload Side Bar/upload-side-bar.component';
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
    FieldSetupSideBarComponent,
    UploadSideBarComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  menuItems: any[] = [];
  // ! HANDLING THE MENU ITEMS BASED ON THE LOGIN CREDENTIALS
  ngOnInit(): void {
    const authData = JSON.parse(sessionStorage.getItem('authData') || '{}');
    const role = authData?.userDetails?.username;
    if (role === 'admin') {
      this.menuItems = this.adminMenu;
    } else if (role === 'superadmin') {
      this.menuItems = this.superAdminMenu;
    }
    console.log('Current user role:', role);
  }

  faSearch = faSearch;
  hoveredItem: string | null = null;
  hideTimeout: any = null;

  // Trigger hover with delay
  onMouseEnter(itemLabel: string): void {
    // Cancel any hide timeout when re-entering
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    this.hoveredItem = itemLabel;
  }

  onMouseLeave(): void {
    // Start a timer to hide the popup after 2 seconds
    this.hideTimeout = setTimeout(() => {
      this.hoveredItem = null;
    }, 200); // 2000ms = 2 sec
  }

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  togglePopup(item: string): void {
    this.hoveredItem = this.hoveredItem === item ? null : item;
  }
  adminMenu = [
    {
      label: 'Home',
      route: null,
      icon: 'Assets/LayoutIcons/Home.svg',
    },
    {
      label: 'Master',
      route: 'master/',
      icon: 'Assets/LayoutIcons/Master.svg',
    },
    { label: 'Entry', route: '#', icon: 'Assets/LayoutIcons/Entry.svg' },
    {
      label: 'Upload',
      route: 'upload/',
      icon: 'Assets/LayoutIcons/Upload.svg',
    },
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

  superAdminMenu = [
    { label: 'Menu Add', route: '#', icon: 'Assets/LayoutIcons/Menu_Add.svg' },
    {
      label: 'Menu Permission',
      route: '#',
      icon: 'Assets/LayoutIcons/Menu_Permission.svg',
    },
    {
      label: 'Field Setup',
      route: 'field-setup/',
      icon: 'Assets/LayoutIcons/Field_Setup.svg',
    },
  ];

  logout() {
    sessionStorage.removeItem('authData');
    this.router.navigate(['auth/login']);
  }

  getHeaderText() {
    return this.breadcrumbService.getBreadcrumbs(this.router.url);
  }
}
