import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-district',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-district.component.html',
  styleUrl: './add-district.component.css',
})
export class AddDistrictComponent {
  editMode: boolean = false;
  editIndex: number | null = null;

  districtName = '';
  state = '';
  townCount = '';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.district) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.districtName = nav.district.districtName || '';
      this.state = nav.district.state || '';
      this.townCount = nav.district.townCount || '';
    }
  }

  get isAddDistrict(): boolean {
    return this.router.url.includes('/master/geography/add-district');
  }

  closeCard() {
    this.router.navigate(['/master/geography/district']);
  }

  saveDistrict() {
    if (!this.districtName || !this.state || !this.townCount) {
      alert('Please fill all required fields.');
      return;
    }

    const existingData = sessionStorage.getItem('add-district');
    let districtList = [];

    try {
      districtList = existingData ? JSON.parse(existingData) : [];
    } catch {
      districtList = [];
    }

    const districtData = {
      districtCode:
        this.editMode && this.editIndex !== null
          ? districtList[this.editIndex]?.districtCode
          : '',

      districtName: this.districtName,
      state: this.state,
      townCount: this.townCount,
      status: 'Active',
    };

    if (this.editMode && this.editIndex !== null) {
      districtList[this.editIndex] = districtData;
    } else {
      districtList.push(districtData);
    }

    sessionStorage.setItem('add-district', JSON.stringify(districtList));

    console.log(
      this.editMode ? 'Updated Distrct:' : 'Added District:',
      districtData
    );

    this.closeCard();
  }
}
