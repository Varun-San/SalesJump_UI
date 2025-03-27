import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, MatTooltipModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  constructor(private router: Router) {}

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
    } else if (currentRoute.includes('/configuration')) {
      return [
        { label: 'Setup', route: '/setup' },
        { label: 'Configuration', route: '/configuration' },
      ];
    } else {
      return null; // No header displayed
    }
  }
}
