import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-pop-material',
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
  templateUrl: './pop-material.component.html',
  styleUrl: './pop-material.component.css',
})
export class PopMaterialComponent {
  faSearch = faSearch;
  showFilterPopup = false;

  // The list of material actions
  menuOptions = [
    { label: 'Edit Details', action: 'edit' },
    { label: 'Deactivate', action: 'deactivate' },
  ];

  // Temporary and active filter object
  tempFilters = { status: '', division: '' };
  activeFilters = { status: '', division: '' };

  // Material data structure
  materialList: {
    material_Code: string;
    erp_Code: string;
    material_Name: string;
    material_Division: string;
    status: string;
  }[] = [];

  selectedMaterial: { material: any; index: number } | null = null;

  constructor(private router: Router) {}

  // Handles different actions from the menu like Edit or Deactivate
  handleMenuAction(action: string) {
    if (!this.selectedMaterial) return;

    switch (action) {
      case 'edit':
        // Navigate to AddMaterial component for editing the material
        this.editMaterial(
          this.selectedMaterial.material,
          this.selectedMaterial.index
        );
        break;

      case 'deactivate':
        // Handle Deactivation logic
        this.onMenuAction('Deactivate');
        break;

      default:
        console.warn('Unknown action:', action);
    }
  }

  // Edit material function that redirects to the AddMaterial component with material data
  editMaterial(material: any, index: number) {
    this.router.navigate(['/master/product/pop-material/add-material'], {
      state: { material, index },
    });
  }

  // Fetch materials from sessionStorage
  ngOnInit() {
    this.loadMaterials();
  }

  // Load materials from sessionStorage and map them into a displayable format
  loadMaterials() {
    const stored = sessionStorage.getItem('add_Material');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const dataArray = Array.isArray(parsed) ? parsed : [parsed];

        this.materialList = dataArray.map((material: any) => ({
          material_Code: material.material_Code || '',
          erp_Code: material.erp_Code || '',
          material_Name: material.material_Name || '',
          material_Division: material.material_Division || '',
          status: material.status || 'Active',
        }));

        console.log('Loaded Materials:', this.materialList);
      } catch (e) {
        console.warn('Invalid data in sessionStorage for materials');
      }
    }
  }

  // Toggle the filter popup visibility
  toggleFilterPopup() {
    this.showFilterPopup = !this.showFilterPopup;
  }

  // Apply filters to the material list
  applyFilters() {
    this.activeFilters = { ...this.tempFilters };
    this.showFilterPopup = false;
  }

  // Cancel the filter and reset the temporary filter
  cancelFilter() {
    this.tempFilters = { ...this.activeFilters };
    this.showFilterPopup = false;
  }

  // Clear individual filters
  clearFilter(type: 'status' | 'division') {
    this.activeFilters[type] = '';
    this.tempFilters[type] = '';
  }

  // Action when menu options are triggered (like Deactivate)
  onMenuAction(action: string) {
    if (!this.selectedMaterial) return;

    const data = sessionStorage.getItem('add_Material');
    let materials = data ? JSON.parse(data) : [];

    const index = this.selectedMaterial.index;

    if (action === 'Deactivate' && materials[index]) {
      const currentStatus = materials[index].status || 'Active'; // default to Active if missing
      materials[index].status =
        currentStatus === 'Active' ? 'Inactive' : 'Active';

      sessionStorage.setItem('add_Material', JSON.stringify(materials));

      this.loadMaterials();
    }

    this.selectedMaterial = null;
  }

  // Select a material from the list to perform actions
  openMenu(material: any, index: number) {
    this.selectedMaterial = { material, index };
  }
}
