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
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE CHECK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  get isAddHo_UserRoute(): boolean {
    return this.router.url.includes('/master/basic_details/add-ho-user');
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EDIT MODE STATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  editMode: boolean = false;
  editIndex: number | null = null;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  honame = '';
  houserid = '';
  hopassword = '';
  hoconfirmpassword = '';
  hoUserName = '';
  selectedType: string[] = [];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR & INIT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.houser) {
      this.editMode = true;
      this.editIndex = nav.index;

      const ho = nav.houser;

      this.honame = ho.Name || '';
      this.houserid = ho.Ho_UserId || '';
      this.hopassword = ho.Houser_password || '';
      this.hoconfirmpassword = ho.Houser_Confirmpassword || '';
      this.hoUserName = ho.Username || '';
      this.selectedType = ho.type || [];
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DROPDOWN OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  types = ['Pharma', 'FMCGA', 'Payroll', 'CRM', 'Auditing', 'Billing'];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SELECTED TYPE HANDLING <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  removeSelected(value: string) {
    this.selectedType = this.selectedType.filter((item) => item !== value);
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  closeCard() {
    this.router.navigate(['/master/basic_details/ho-user']);
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SAVE OR UPDATE HO USER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  saveHoUser() {
    if (
      !this.honame ||
      !this.houserid ||
      !this.hopassword ||
      !this.hoconfirmpassword ||
      !this.selectedType.length
    ) {
      alert('Please fill all required fields.');
      return;
    }

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
      hoUserArray = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      console.warn('Failed to parse sessionStorage data. Resetting...');
      hoUserArray = [];
    }

    if (this.editMode && this.editIndex !== null) {
      hoUserArray[this.editIndex] = hoUser;
    } else {
      hoUserArray.push(hoUser);
    }

    sessionStorage.setItem('Ho-user-data', JSON.stringify(hoUserArray));

    console.log(this.editMode ? 'Updated Company:' : 'Added Company:', hoUser);

    this.closeCard();
  }
}
