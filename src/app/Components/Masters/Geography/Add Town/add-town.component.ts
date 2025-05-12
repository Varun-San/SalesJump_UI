import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-town',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-town.component.html',
  styleUrl: './add-town.component.css',
})
export class AddTownComponent {
  editMode: boolean = false;
  editIndex: number | null = null;

  townName = '';
  district = '';
  territory = '';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.town) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.townName = nav.town.townName || '';
      this.district = nav.town.district || '';
      this.territory = nav.town.territory || '';
    }
  }

  get isAddTown(): boolean {
    return this.router.url.includes('/master/geography/add-town');
  }

  closeCard() {
    this.router.navigate(['/master/geography/town']);
  }

  saveTown() {
    if (!this.townName || !this.district || !this.territory) {
      alert('Please fill all required fields.');
      return;
    }

    const existingData = sessionStorage.getItem('add-town');
    let townList = [];

    try {
      townList = existingData ? JSON.parse(existingData) : [];
    } catch {
      townList = [];
    }

    const townData = {
      townCode:
        this.editMode && this.editIndex !== null
          ? townList[this.editIndex]?.territoryCode
          : '',

      townName: this.townName,
      district: this.district,
      territory: this.territory,
      status: 'Active',
    };

    if (this.editMode && this.editIndex !== null) {
      townList[this.editIndex] = townData;
    } else {
      townList.push(townData);
    }

    sessionStorage.setItem('add-town', JSON.stringify(townList));

    console.log(this.editMode ? 'Updated Town:' : 'Added Town:', townData);

    this.closeCard();
  }
}
