import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  imports: [],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.css',
})
export class LeafletMapComponent implements AfterViewInit {
  private map: L.Map | undefined;
  private marker: L.Marker | undefined;

  @Output() locationSelected = new EventEmitter<{ lat: number; lng: number }>();

  zoom = 10;
  center = { lat: 13.02994, lng: 80.24181 };

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView(
      [this.center.lat, this.center.lng],
      this.zoom
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Default marker on center
    this.marker = L.marker([this.center.lat, this.center.lng])
      .addTo(this.map)
      .bindPopup(`Default location:<br>${this.center.lat}, ${this.center.lng}`)
      .openPopup();

    // Emit initial location
    this.locationSelected.emit({ lat: this.center.lat, lng: this.center.lng });

    // On map click
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      if (this.marker) {
        this.marker
          .setLatLng(e.latlng)
          .setPopupContent(
            `Clicked location:<br>${lat.toFixed(5)}, ${lng.toFixed(5)}`
          )
          .openPopup();
      }

      // Emit clicked location to parent
      this.locationSelected.emit({ lat, lng });
    });
  }
}
