import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-zone',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-zone.component.html',
  styleUrl: './add-zone.component.css',
})
export class AddZoneComponent {
  editMode: boolean = false;
  editIndex: number | null = null;

  zoneName = '';
  area = '';
  territory_count = '';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.zone) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.zoneName = nav.zone.zoneName || '';
      this.area = nav.zone.area || '';
      this.territory_count = nav.zone.territory_count || '';
    }
  }

  get isAddZone(): boolean {
    return this.router.url.includes('/master/geography/add-zone');
  }

  closeCard() {
    this.router.navigate(['/master/geography/zone']);
  }

  saveZone() {
    if (!this.zoneName || !this.area || !this.territory_count) {
      alert('Please fill all required fields.');
      return;
    }

    const existingData = sessionStorage.getItem('add-zone');
    let zoneList = [];

    try {
      zoneList = existingData ? JSON.parse(existingData) : [];
    } catch {
      zoneList = [];
    }

    const zoneData = {
      zoneCode:
        this.editMode && this.editIndex !== null
          ? zoneList[this.editIndex]?.zoneCode
          : '',

      zoneName: this.zoneName,
      area: this.area,
      territory_count: this.territory_count,
      status: 'Active',
    };

    if (this.editMode && this.editIndex !== null) {
      zoneList[this.editIndex] = zoneData;
    } else {
      zoneList.push(zoneData);
    }

    sessionStorage.setItem('add-zone', JSON.stringify(zoneList));

    console.log(this.editMode ? 'Updated Zone:' : 'Added Zone:', zoneData);

    this.closeCard();
  }
}
