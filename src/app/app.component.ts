import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private primeng: PrimeNG, private router: Router) {
    this.trackRouteChanges();
  }

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
  title = 'SALES_JUMP';

  trackRouteChanges() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Exclude login or auth routes if needed
        if (!event.urlAfterRedirects.includes('/login')) {
          sessionStorage.setItem('lastVisitedUrl', event.urlAfterRedirects);
        }
      });
  }
}
