import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-ho-user',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-ho-user.component.html',
  styleUrl: './add-ho-user.component.css',
})
export class AddHoUserComponent {
  honame = '';
  houserid = '';
  hopassword = '';
  hoconfirmpassword = '';
  hoUserName = '';

  constructor(private router: Router) {}

  //! Dropdown
  types = ['Pharma', 'FMCGA', 'Payroll', 'CRM', 'Auditing', 'Billing'];
  selectedType: string[] = []; // 🛠️ Fix: initialize as an array

  removeSelected(value: string) {
    this.selectedType = this.selectedType.filter((item) => item !== value);
  }

  get isAddHo_UserRoute(): boolean {
    return this.router.url.includes('/master/basic_details/add-ho-user');
  }

  closeCard() {
    this.router.navigate(['/master/basic_details/ho-user']); // go back to main tab
  }

  saveDivision() {
    if (
      !this.honame ||
      !this.houserid ||
      !this.hopassword ||
      !this.hoconfirmpassword ||
      !this.selectedType
    ) {
      alert('Please fill all required fields.');
      return;
    }

    console.log('Saving division:', {
      Name: this.honame,
      Ho_UserId: this.houserid,
      Houser_password: this.hopassword,
      Houser_Confirmpassword: this.hoconfirmpassword,
      Username: this.hoUserName,
      type: this.selectedType,
    });

    const hoUser = {
      Name: this.honame,
      Ho_UserId: this.houserid,
      Houser_password: this.hopassword,
      Houser_Confirmpassword: this.hoconfirmpassword,
      Username: this.hoUserName,
      type: this.selectedType,
    };

    const existingData = sessionStorage.getItem('Ho-user-data');
    let hoUserArray: any[] = [];

    try {
      const parsed = JSON.parse(existingData || '[]');
      // If parsed is an array, use it; otherwise convert to array
      hoUserArray = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      console.warn('Failed to parse sessionStorage data. Resetting...');
      hoUserArray = [];
    }

    hoUserArray.push(hoUser);

    sessionStorage.setItem('Ho-user-data', JSON.stringify(hoUserArray));

    console.log('Saving Ho User:', hoUserArray);

    this.closeCard();
  }
}
