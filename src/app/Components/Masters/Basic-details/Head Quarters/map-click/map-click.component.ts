import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map-click',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map-click.component.html',
  styleUrl: './map-click.component.css',
})
export class MapClickComponent {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.006 }; // New York
  clickedLocation: google.maps.LatLngLiteral | null = null;

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.clickedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
    }
  }
}
