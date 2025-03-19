import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-wise-settings',
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './user-wise-settings.component.html',
  styleUrl: './user-wise-settings.component.css',
})
export class UserWiseSettingsComponent {
  faSearch = faSearch;
  faFilter = faFilter;
}
