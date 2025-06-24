import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-division',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-division.component.html',
  styleUrl: './add-division.component.css',
})
export class AddDivisionComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FLAGS & EDIT MODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editMode: boolean = false;
  editIndex: number | null = null;

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM FIELDS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  divisionPrefix: string = '';
  divisionName: string = '';
  productWiseCount: string = '';
  userWiseCount: string = '';

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR & INITIALIZATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private router: Router) {
    this.initializeEditState();
  }

  private initializeEditState(): void {
    const nav = history.state;

    if (nav && nav.division) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.divisionPrefix = nav.division.divisionPrefix || '';
      this.divisionName = nav.division.divisionName || '';
      this.productWiseCount = nav.division.productWiseCount || '';
      this.userWiseCount = nav.division.userWiseCount || '';
    }
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE CHECK (ADD VS EDIT) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  get isAddDivisionRoute(): boolean {
    return this.router.url.includes(
      'master/basic_details/division/add-division'
    );
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM ACTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  saveDivision(): void {
    if (
      !this.divisionPrefix ||
      !this.divisionName ||
      !this.productWiseCount ||
      !this.userWiseCount
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const divisionData = {
      divisionName: this.divisionName,
      divisionPrefix: this.divisionPrefix,
      productWiseCount: this.productWiseCount,
      userWiseCount: this.userWiseCount,
      status: 'Active',
    };

    let divisions: any[] = [];

    try {
      const existingData = sessionStorage.getItem('add-division');
      divisions = existingData ? JSON.parse(existingData) : [];

      if (!Array.isArray(divisions)) {
        divisions = [];
      }
    } catch {
      divisions = [];
    }

    if (this.editMode && this.editIndex !== null) {
      divisions[this.editIndex] = divisionData;
    } else {
      divisions.push(divisionData);
    }

    sessionStorage.setItem('add-division', JSON.stringify(divisions));

    console.log(
      this.editMode ? 'Updated Division:' : 'Added Division:',
      divisionData
    );

    this.closeCard();
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE HANDLER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/basic_details/division']);
    });
  }
}
