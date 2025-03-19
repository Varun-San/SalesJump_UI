import { Component } from '@angular/core';
import {
  Router,
  RouterModule,
  RouterOutlet,
  ActivatedRoute,
  NavigationEnd,
} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule, RouterOutlet],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css',
})
export class ConfigurationComponent {
  faSearch = faSearch;
  showSidebar = true;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentChild = this.route.firstChild?.snapshot.url[0]?.path;
        this.showSidebar = !currentChild;
      });
  }
}
