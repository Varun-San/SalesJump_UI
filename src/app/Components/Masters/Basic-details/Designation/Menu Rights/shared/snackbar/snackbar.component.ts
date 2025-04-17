import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  template: `
    <div class="snackbar-content">
      <img src="Assets/Designation/tick Circle.svg" width="20" height="20" alt="Tick" />
      <span>{{ data }}</span>
    </div>
  `,
  styles: [
    `
      .snackbar-content {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
        color: #000;
      }
    `,
  ],
})
export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}
}
