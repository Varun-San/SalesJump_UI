import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LeafletMapComponent } from './Map/leaflet-map.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-add-head-quarters',
  imports: [CommonModule, RouterModule, FormsModule, LeafletMapComponent],
  templateUrl: './add-head-quarters.component.html',
  styleUrl: './add-head-quarters.component.css',
})
export class AddHeadQuartersComponent {
  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}
  headQuartersName = '';
  selectedType = '';
  latitude = '';
  longitude = '';

  //! Dropdown options
  types = ['Head Quarters A', 'Head Quarters B', 'Head Quarters C'];

  get isAddHeadquartersRoute(): boolean {
    return this.router.url.includes('/master/basic_details/add-headquarters');
  }

  onMapLocationSelected(location: { lat: number; lng: number }) {
    this.latitude = location.lat.toFixed(5);
    this.longitude = location.lng.toFixed(5);
    this.cdRef.detectChanges();
  }

  closeCard() {
    this.router.navigate(['/master/basic_details/head-quarters']);
  }

  saveDivision() {
    if (
      !this.headQuartersName ||
      !this.selectedType ||
      !this.latitude ||
      !this.longitude
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const newHQ = {
      name: this.headQuartersName,
      type: this.selectedType,
      latitude: this.latitude,
      longitude: this.longitude,
    };

    const existingData = sessionStorage.getItem('headQuartersData');
    let headQuartersArray: any[] = [];

    try {
      const parsed = JSON.parse(existingData || '[]');
      // If parsed is an array, use it; otherwise convert to array
      headQuartersArray = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      console.warn('Failed to parse sessionStorage data. Resetting...');
      headQuartersArray = [];
    }

    headQuartersArray.push(newHQ);

    sessionStorage.setItem(
      'headQuartersData',
      JSON.stringify(headQuartersArray)
    );

    console.log('Saving Head Quarters:', headQuartersArray);

    this.closeCard();
  }
}
