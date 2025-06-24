import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-territory',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-territory.component.html',
  styleUrl: './add-territory.component.css',
})
export class AddTerritoryComponent {
  editMode: boolean = false;
  editIndex: number | null = null;

  territoryName = '';
  zone = '';
  routeCount = '';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.territory) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.territoryName = nav.territory.territoryName || '';
      this.zone = nav.territory.zone || '';
      this.routeCount = nav.territory.routeCount || '';
    }
  }

  get isAddTerritory(): boolean {
    return this.router.url.includes(
      '/master/geography/territory/add-territory'
    );
  }

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/geography/territory']);
    });
  }

  saveTerritory() {
    if (!this.territoryName || !this.zone || !this.routeCount) {
      alert('Please fill all required fields.');
      return;
    }

    const existingData = sessionStorage.getItem('add-territory');
    let territoryList = [];

    try {
      territoryList = existingData ? JSON.parse(existingData) : [];
    } catch {
      territoryList = [];
    }

    const districtData = {
      territoryCode:
        this.editMode && this.editIndex !== null
          ? territoryList[this.editIndex]?.territoryCode
          : '',

      territoryName: this.territoryName,
      zone: this.zone,
      routeCount: this.routeCount,
      status: 'Active',
    };

    if (this.editMode && this.editIndex !== null) {
      territoryList[this.editIndex] = districtData;
    } else {
      territoryList.push(districtData);
    }

    sessionStorage.setItem('add-territory', JSON.stringify(territoryList));

    console.log(
      this.editMode ? 'Updated Territory:' : 'Added Territory:',
      districtData
    );

    this.closeCard();
  }
}
