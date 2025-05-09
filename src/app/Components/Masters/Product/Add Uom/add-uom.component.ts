import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-uom',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-uom.component.html',
  styleUrl: './add-uom.component.css',
})
export class AddUomComponent {
  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>> GETTING THE ADD UOM <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  get isAddUom(): boolean {
    return this.router.url.includes('master/product/uom/add-uom');
  }

  editMode: boolean = false;
  editIndex: number | null = null;

  add_Uom_Name = '';
  add_Uom_Slno = '';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.uom) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.add_Uom_Name = nav.uom.add_Uom_Name || '';
      this.add_Uom_Slno = nav.uom.add_Uom_Slno || '';
    }
  }

  closeCard() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/product/uom']);
    });
  }

  saveUom() {
    if (!this.add_Uom_Name) {
      alert('Please fill all required fields.');
      return;
    }

    const existingData = sessionStorage.getItem('add_Uom');
    let add_Uom: any[] = [];

    try {
      add_Uom = existingData ? JSON.parse(existingData) : [];
      if (!Array.isArray(add_Uom)) {
        add_Uom = [];
      }
    } catch (e) {
      add_Uom = [];
    }

    // Generate or preserve serial number
    let slno: string;
    if (this.editMode && this.editIndex !== null) {
      slno = add_Uom[this.editIndex]?.add_Uom_Slno || `${this.editIndex + 1}`;
    } else {
      slno = `${add_Uom.length + 1}`;
    }

    const add_Uom_Data = {
      add_Uom_Name: this.add_Uom_Name,
      add_Uom_Slno: slno,
    };

    if (this.editMode && this.editIndex !== null) {
      add_Uom[this.editIndex] = add_Uom_Data;
    } else {
      add_Uom.push(add_Uom_Data);
    }

    sessionStorage.setItem('add_Uom', JSON.stringify(add_Uom));

    console.log(this.editMode ? 'Updated UOM:' : 'Added UOM:', add_Uom_Data);

    this.closeCard();
  }
}
