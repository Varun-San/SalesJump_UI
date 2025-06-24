import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-area',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-area.component.html',
  styleUrl: './add-area.component.css',
})
export class AddAreaComponent {
  editMode: boolean = false;
  editIndex: number | null = null;

  areaName = '';
  state = '';
  zoneCount = '';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.area) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.areaName = nav.area.areaName || '';
      this.state = nav.area.state || '';
      this.zoneCount = nav.area.zoneCount || '';
    }
  }

  get isAddArea(): boolean {
    return this.router.url.includes('/master/geography/area/add-area');
  }

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/geography/area']);
    });
  }

  saveArea() {
    if (!this.areaName || !this.state || !this.zoneCount) {
      alert('Please fill all required fields.');
      return;
    }

    const existingData = sessionStorage.getItem('add-area');
    let areaList = [];

    try {
      areaList = existingData ? JSON.parse(existingData) : [];
    } catch {
      areaList = [];
    }

    const areaData = {
      areaCode:
        this.editMode && this.editIndex !== null
          ? areaList[this.editIndex]?.areaCode
          : '',
      areaName: this.areaName,
      state: this.state,
      zoneCount: this.zoneCount,
      status: 'Active',
    };

    if (this.editMode && this.editIndex !== null) {
      areaList[this.editIndex] = areaData;
    } else {
      areaList.push(areaData);
    }

    sessionStorage.setItem('add-area', JSON.stringify(areaList));

    console.log(this.editMode ? 'Updated Area:' : 'Added Area:', areaData);

    this.closeCard();
  }
}
