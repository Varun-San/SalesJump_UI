import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-menu-creation',
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    RouterLink,
    MatTooltipModule,
    RouterOutlet,
  ],
  templateUrl: './menu-creation.component.html',
  styleUrls: ['./menu-creation.component.css'],
})
export class MenuCreationComponent implements OnInit {
  faSearch = faSearch;
  menus: any[] = [];

  constructor(private router: Router) {}
  ngOnInit() {
    this.loadMenus();
  }

  loadMenus() {
    const data = sessionStorage.getItem('add-Menu');
    if (data) {
      try {
        this.menus = JSON.parse(data);
      } catch {
        this.menus = [];
      }
    }
  }
  editMenu(menu: any, index: number) {
    this.router.navigate(['/menu-creation/add-menu'], {
      state: { menu, index }, // pass the menu data and its index
    });
  }
}
