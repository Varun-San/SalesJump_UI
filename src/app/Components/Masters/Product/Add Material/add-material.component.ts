import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-material',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-material.component.html',
  styleUrl: './add-material.component.css',
})
export class AddMaterialComponent {
  get isAddMaterial(): boolean {
    return this.router.url.includes('master/product/pop-material/add-material');
  }

  editMode: boolean = false;
  editIndex: number | null = null;

  erp_Code = '';
  material_Name = '';
  material_Division = '';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.material) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.erp_Code = nav.material.erp_Code || '';
      this.material_Name = nav.material.material_Name || '';
      this.material_Division = nav.material.material_Division;
    }
  }

  closeCard() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/product/pop-material']);
    });
  }

  saveMaterial() {
    if (!this.erp_Code || !this.material_Name || !this.material_Division) {
      alert('Please fill all required fields.');
      return;
    }

    const materialData = {
      material_Code: '',
      erp_Code: this.erp_Code,
      material_Name: this.material_Name,
      material_Division: this.material_Division,
      status: 'Active',
    };

    const existingData = sessionStorage.getItem('add_Material');
    let material: any[] = [];

    try {
      material = existingData ? JSON.parse(existingData) : [];
    } catch {
      material = [];
    }

    if (this.editMode && this.editIndex !== null) {
      material[this.editIndex] = materialData;
    } else {
      material.push(materialData);
    }

    sessionStorage.setItem('add_Material', JSON.stringify(material));

    console.log(
      this.editMode ? 'Updated Material:' : 'Added Material:',
      materialData
    );

    this.closeCard();
  }
}
