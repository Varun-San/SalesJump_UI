import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { LeafletMapComponent } from './Map/leaflet-map.component';

@Component({
  selector: 'app-add-head-quarters',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, LeafletMapComponent],
  templateUrl: './add-head-quarters.component.html',
  styleUrls: ['./add-head-quarters.component.css'],
})
export class AddHeadQuartersComponent {
  headQuartersName = '';
  selectedType = '';
  latitude = '';
  longitude = '';

  editMode = false;
  editIndex: number | null = null;

  //! Dropdown options
  types = ['Head Quarters A', 'Head Quarters B', 'Head Quarters C'];

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {
    const nav = history.state; // Access the state passed via router

    if (nav && nav.hq) {
      this.editMode = true;
      this.editIndex = nav.index; // Get the index for editing purposes

      // Populate the fields with the headquarters data
      this.headQuartersName = nav.hq.name || '';
      this.selectedType = nav.hq.type || '';
      this.latitude = nav.hq.latitude || '';
      this.longitude = nav.hq.longitude || '';
    }
  }

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

  saveHeadquarters() {
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
      headQuartersArray = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      console.warn('Failed to parse sessionStorage data. Resetting...');
      headQuartersArray = [];
    }

    if (this.editMode && this.editIndex !== null) {
      // Update the headquarters at the provided index
      headQuartersArray[this.editIndex] = newHQ;
    } else {
      // Add the new headquarters
      headQuartersArray.push(newHQ);
    }

    // Store the updated data back in sessionStorage
    sessionStorage.setItem(
      'headQuartersData',
      JSON.stringify(headQuartersArray)
    );

    console.log(
      this.editMode ? 'Updated Head Quarters:' : 'Added Head Quarters:',
      newHQ
    );

    this.closeCard();
  }
}
