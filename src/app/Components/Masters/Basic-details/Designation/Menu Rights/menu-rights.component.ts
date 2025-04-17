import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRadioModule } from '@angular/material/radio';
// Drop down
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, NgModel } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';

@Component({
  selector: 'app-menu-rights',
  imports: [
    RouterModule,
    FontAwesomeModule,
    CommonModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './menu-rights.component.html',
  styleUrl: './menu-rights.component.css',
})
export class MenuRightsComponent {
  divisionPrefix = '';
  divisionName = '';

  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  //! Dropdown
  types = ['Division A', 'Division B', 'Division C']; // Replace with your actual values
  selectedType = ''; // This will be bound to the dropdown

  get isDesignationMenuRights(): boolean {
    return this.router.url.includes(
      '/master/basic_details/designation/menu-rights'
    );
  }

  // !~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  faSearch = faSearch;

  tabs = ['Master', 'Entry', 'Upload', 'Approvals', 'Reports', 'Setup'];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  disableSelect = new FormControl(false);

  //? ------------- SECTION MODULES -------------

  //! Master

  menu_rights = [
    { title: 'Enable All Master', checked: false },
    { title: 'Company', checked: false },
    { title: 'Division', checked: false },
    { title: 'Head Quarters', checked: false },
    { title: 'Work Type', checked: false },
    { title: 'Shift Details', checked: false },
  ];

  onToggleChange(changedItem: any): void {
    const state = changedItem.checked ? 'enabled' : 'disabled';
    this.openSnackBar(`${changedItem.title} has been ${state}`);

    if (changedItem.title === 'Enable All Master') {
      // Toggle all others based on master switch
      const newState = changedItem.checked;
      this.menu_rights.forEach((item) => {
        item.checked = newState;
      });
    } else {
      // If any individual is toggled off, uncheck master
      const allCheckedExceptMaster = this.menu_rights
        .filter((item) => item.title !== 'Enable All Master')
        .every((item) => item.checked);

      const masterItem = this.menu_rights.find(
        (item) => item.title === 'Enable All Master'
      );
      if (masterItem) {
        masterItem.checked = allCheckedExceptMaster;
      }
    }
  }

  //! ALERT BOX

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: 'custom-snackbar-style',
    });
  }
}
