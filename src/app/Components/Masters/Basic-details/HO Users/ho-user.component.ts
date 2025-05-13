import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-ho-user',
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    RouterLink,
    MatTooltipModule,
  ],
  templateUrl: './ho-user.component.html',
  styleUrl: './ho-user.component.css',
})
export class HoUserComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  menuOptions = [
    { label: 'Edit Details', route: null },
    { label: 'Deactivate', route: null },
  ];

  tempFilters = { status: '', role: '' };
  activeFilters = { status: '', role: '' };

  selectedHoUser: { houser: any; index: number } | null = null;

  // 🛠️ HO User List with status
  HoUserList: {
    Ho_UserId: string;
    Name: string;
    type: string[];
    Houser_password: string;
    Houser_Confirmpassword: string;
    Username: string;
    status: string;
  }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const storedHoUser = sessionStorage.getItem('Ho-user-data');
    if (storedHoUser) {
      try {
        const parsed = JSON.parse(storedHoUser);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.HoUserList = dataArray.map((ho: any, index: number) => ({
          Ho_UserId: ho.Ho_UserId || `HQ ${101 + index}`,
          Name: ho.Name || '',
          type: Array.isArray(ho.type) ? ho.type : [ho.type],
          Houser_password: ho.Houser_password || '',
          Houser_Confirmpassword: ho.Houser_Confirmpassword || '',
          Username: ho.Username || '',
          status: ho.status || 'Active',
        }));
      } catch (e) {
        console.warn('Invalid headquarters data in sessionStorage');
      }
    }
  }

  openMenu(hq: any, index: number) {
    this.selectedHoUser = { houser: hq, index };
  }

  handleMenuAction(action: string) {
    if (!this.selectedHoUser) return;

    const { houser, index } = this.selectedHoUser;

    if (action === 'edit') {
      this.router.navigate(['/master/basic_details/add-ho-user'], {
        state: { houser, index },
      });
    } else if (action === 'deactivate') {
      this.toggleUserStatus(index);
    }
  }

  onMenuAction(action: string) {
    if (!this.selectedHoUser) return;

    const { houser, index } = this.selectedHoUser;

    if (action === 'Edit Details') {
      this.router.navigate(['/master/basic_details/add-ho-user'], {
        state: { houser, index },
      });
    } else if (action === 'Deactivate') {
      this.toggleUserStatus(index);
    }
  }

  toggleUserStatus(index: number) {
    const stored = sessionStorage.getItem('Ho-user-data');
    if (!stored) return;

    let hoUsers = JSON.parse(stored);
    if (!Array.isArray(hoUsers)) hoUsers = [hoUsers];

    const currentStatus = hoUsers[index].status || 'Active';
    hoUsers[index].status = currentStatus === 'Active' ? 'Inactive' : 'Active';

    sessionStorage.setItem('Ho-user-data', JSON.stringify(hoUsers));
    this.ngOnInit(); // Refresh the list
    this.selectedHoUser = null;
  }
  toggleFilterPopup() {
    this.showFilterPopup = !this.showFilterPopup;
  }

  applyFilters() {
    this.activeFilters = { ...this.tempFilters };
    this.showFilterPopup = false;
  }

  cancelFilter() {
    this.tempFilters = { ...this.activeFilters };
    this.showFilterPopup = false;
  }

  clearFilter(type: 'status' | 'role') {
    this.activeFilters[type] = '';
    this.tempFilters[type] = '';
  }
}
