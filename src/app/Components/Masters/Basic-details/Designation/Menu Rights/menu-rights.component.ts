import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
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
  styleUrls: ['./menu-rights.component.css'],
})
export class MenuRightsComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VARIABLES & ICONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  faSearch = faSearch;

  divisionPrefix = '';
  divisionName = '';

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTER-BASED FLAG <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  get isDesignationMenuRights(): boolean {
    return this.router.url.includes(
      '/master/basic_details/designation/menu-rights'
    );
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DROPDOWN SETTINGS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  types = ['Division A', 'Division B', 'Division C']; // Replace with your actual values
  selectedType = ''; // Bound to dropdown selection

  disableSelect = new FormControl(false);

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TAB MANAGEMENT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  tabs = ['Master', 'Entry', 'Upload', 'Approvals', 'Reports', 'Setup'];
  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU RIGHTS DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  menu_rights = [
    { title: 'Enable All Master', checked: false },
    { title: 'Company', checked: false },
    { title: 'Division', checked: false },
    { title: 'Head Quarters', checked: false },
    { title: 'Work Type', checked: false },
    { title: 'Shift Details', checked: false },
  ];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENU RIGHTS TOGGLE HANDLER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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
      // If any individual is toggled off, uncheck master switch
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

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SNACKBAR SETTINGS & OPEN METHOD <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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
