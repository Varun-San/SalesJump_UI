import { Component } from '@angular/core';
import { BasicDetailsRoutingModule } from "../Masters/Basic-details/basic-details-routing.module";

@Component({
  selector: 'app-admin-entry',
  imports: [BasicDetailsRoutingModule],
  templateUrl: './admin-entry.component.html',
  styleUrl: './admin-entry.component.css'
})
export class AdminEntryComponent {

}
