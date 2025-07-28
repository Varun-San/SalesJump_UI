import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-menu',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './add-menu.component.html',
  styleUrl: './add-menu.component.css',
})
export class AddMenuComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE CHECK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  get isAddDesignation(): boolean {
    return this.router.url.includes('/menu-creation/add-menu');
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FLAGS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editMode: boolean = false;
  editIndex: number | null = null;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM FIELDS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  menuName: string = '';
  menuType: string | null = null;
  menuIcon: string = '';

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DROPDOWN OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  typeOptions: string[] = ['Basic'];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.menu) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.menuName = nav.menu.menuName || '';
      this.menuType = nav.menu.menuType || '';
      this.menuIcon = nav.menu.menuIcon || '';
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CLOSE FORM & NAVIGATE BACK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/menu-creation']);
    });
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SAVE DESIGNATION DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  saveMenu(): void {
    if (!this.menuName || !this.menuType || !this.menuIcon) {
      alert('Please fill all required fields.');
      return;
    }

    const MenuData = {
      menuName: this.menuName,
      menuType: this.menuType,
      menuIcon: this.menuIcon,
    };

    const existingData = sessionStorage.getItem('add-Menu');
    let menu = [];

    try {
      menu = existingData ? JSON.parse(existingData) : [];
    } catch {
      menu = [];
    }

    if (this.editMode && this.editIndex !== null) {
      menu[this.editIndex] = MenuData;
    } else {
      menu.push(MenuData);
    }

    sessionStorage.setItem('add-Menu', JSON.stringify(menu));

    console.log(
      this.editMode ? 'Updated Menu:' : 'Added Menu:',
      MenuData
    );

    this.closeCard();
  }
}
