import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-route-list',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './add-route-list.component.html',
  styleUrl: './add-route-list.component.css',
})
export class AddRouteListComponent {
  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FLAGS & ROUTING <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  get isAddRouteList(): boolean {
    return this.router.url.includes('/master/route/route-list/add-route-list');
  }

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.route) {
      this.editMode = true;
      this.editIndex = nav.index;

      const route = nav.route;

      this.route = {
        routeName: route.routeName || '',
        distance: route.distance || '',
        target: route.target || '',
        productionPercentage: route.productionPercentage || '',
        routePopulation: route.routePopulation || '',
        territory: route.territory || '',
        allowanceType: route.allowanceType || '',
        town: route.town || '',
        distributor: route.distributor || '',
        subDivision: route.subDivision || '',
        fieldForce: route.fieldForce || '',
      };
    }
  }

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DROPDOWN OPTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  territoryOptions = [
    { label: 'Plain', value: 'Plain' },
    { label: 'Rock', value: 'Rock' },
  ];

  allowanceOptions = [
    { label: 'Salary', value: 'Salary' },
    { label: 'Exceptions', value: 'Exceptions' },
  ];

  townOptions = [
    { label: 'Rural', value: 'Rural' },
    { label: 'Urban', value: 'Urban' },
  ];

  distributorOption = [
    { label: 'Distributor_1', value: 'Distributor_1' },
    { label: 'Distributor_2', value: 'Distributor_2' },
    { label: 'Distributor_3', value: 'Distributor_3' },
    { label: 'Distributor_4', value: 'Distributor_4' },
  ];

  subDivisionOption = [
    { label: 'Sub Division_1', value: 'Sub Division_1' },
    { label: 'Sub Division_2', value: 'Sub Division_2' },
    { label: 'Sub Division_3', value: 'Sub Division_3' },
    { label: 'Sub Division_4', value: 'Sub Division_4' },
  ];

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM STATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editMode: boolean = false;
  editIndex: number | null = null;

  route: Route = {
    routeName: '',
    distance: '',
    target: '',
    productionPercentage: '',
    routePopulation: '',
    territory: null,
    allowanceType: null,
    town: null,
    distributor: [],
    subDivision: [],
    fieldForce: '',
  };

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM ACTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/route/route-list/']);
    });
  }

  saveRouteList() {
    if (!this.route.routeName) {
      alert('Please fill all required fields.');
      return;
    }

    const routeListData = { ...this.route };

    const existingData = sessionStorage.getItem('Route-List-Data');
    let routeListArray: any[] = [];

    try {
      routeListArray = existingData ? JSON.parse(existingData) : [];
    } catch {
      routeListArray = [];
    }

    if (this.editMode && this.editIndex !== null) {
      routeListArray[this.editIndex] = routeListData;
      console.log('Updated Route', this.editIndex);
    } else {
      routeListArray.push(routeListData);
      console.log('Added Route');
    }

    sessionStorage.setItem('Route-List-Data', JSON.stringify(routeListArray));
    this.closeCard();
  }
}

// ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INTERFACE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

interface Route {
  routeName: string;
  distance: string;
  target: string;
  productionPercentage: string;
  routePopulation: string;
  territory: string | null;
  allowanceType: string | null;
  town: string | null;
  distributor: string[];
  subDivision: string[];
  fieldForce: string;
}
