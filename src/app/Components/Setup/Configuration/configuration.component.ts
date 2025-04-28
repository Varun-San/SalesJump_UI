import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; // Import Router

@Component({
  selector: 'app-configuration',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css',
})
export class ConfigurationComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
}
