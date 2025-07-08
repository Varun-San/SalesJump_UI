import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ciruclar',
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './ciruclar.component.html',
  styleUrl: './ciruclar.component.css',
})
export class CiruclarComponent {
  // ! TABS CONTROL FOR THE NAV
  tabItems = [
    {
      label: 'Circular',
      path: '/master/circular/circular-list',
    },
  ];

  showOptions = false;
  hoveredItem: string | null = null;

  constructor(private router: Router) {}

  // Function to handle navigation
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Master list merged into tabs
  tabs = ['Circular'];

  activeTab = this.tabs[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
