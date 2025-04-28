import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
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

  // ✅ Dynamic Ho Users array
  HoUserList: {
    Ho_UserId: string;
    Name: string;
    type: string[]; // 🛠️ Change to array of strings
    Houser_password: string;
    Houser_Confirmpassword: string;
    Username: string;
  }[] = [];

  ngOnInit() {
    const storedHoUser = sessionStorage.getItem('Ho-user-data');
    if (storedHoUser) {
      try {
        const parsed = JSON.parse(storedHoUser);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.HoUserList = dataArray.map((ho: any, index: number) => ({
          Ho_UserId: `HQ ${101 + index}`,
          Name: ho.Name,
          type: Array.isArray(ho.type) ? ho.type : [ho.type],
          Houser_password: ho.Houser_password,
          Houser_Confirmpassword: ho.Houser_Confirmpassword,
          Username: ho.Username,
        }));
        console.log(this.HoUserList);
      } catch (e) {
        console.warn('Invalid headquarters data in sessionStorage');
      }
    }
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

  selectedHQ: any = null;

  openMenu(hq: any) {
    this.selectedHQ = hq;
  }
  onMenuAction(action: string) {
    if (!this.selectedHQ) return;

    if (action === 'Deactivate') {
      this.selectedHQ.status =
        this.selectedHQ.status === 'Active' ? 'Inactive' : 'Active';
    }
  }
}
