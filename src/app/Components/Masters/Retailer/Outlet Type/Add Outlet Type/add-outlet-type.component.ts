import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-outlet-type',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './add-outlet-type.component.html',
  styleUrl: './add-outlet-type.component.css',
})
export class AddOutletTypeComponent {
  editMode: boolean = false;
  editIndex: number | null = null;

  outletType_Name = '';
  outletType_Code = '';
  outlet_NoOfCustomer = 16;
  status = 'Active';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.outlet) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.outletType_Name = nav.outlet.outletType_Name || '';
      this.outletType_Code = nav.outlet.outletType_Code || '';
      this.outlet_NoOfCustomer = nav.outlet.outlet_NoOfCustomer || '';
      this.status = nav.outlet.status || '';
    }
  }

  get isAddOutlet(): boolean {
    return this.router.url.includes(
      'master/retailer/retailer-outlet-type/add-routlet-type'
    );
  }

  closeCard() {
    this.router.navigate(['/master/retailer/retailer-outlet-type']);
  }

  saveOutlet() {
    if (
      !this.outletType_Name ||
      !this.outletType_Code ||
      !this.outlet_NoOfCustomer ||
      !this.status
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const outletData = {
      outletType_Name: this.outletType_Name,
      outletType_Code: this.outletType_Code,
      category_No_of_Prdts: this.outlet_NoOfCustomer,
      status: this.status,
    };

    const existingData = sessionStorage.getItem('add_Outlet');
    let outlets: any[] = [];

    try {
      outlets = existingData ? JSON.parse(existingData) : [];
    } catch {
      outlets = [];
    }

    if (this.editMode && this.editIndex !== null) {
      outlets[this.editIndex] = outletData;
    } else {
      outlets.push(outletData);
    }

    sessionStorage.setItem('add_Outlet', JSON.stringify(outlets));

    console.log(
      this.editMode ? 'Updated Outlet:' : 'Added Outlet:',
      outletData
    );

    this.closeCard();
  }
}
