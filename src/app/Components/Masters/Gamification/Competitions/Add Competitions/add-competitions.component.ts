import { Component, inject, ViewChild } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-competitions',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    RouterModule,
    NgIf,
    FormsModule,
    NgSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './add-competitions.component.html',
  styleUrl: './add-competitions.component.css',
})
export class AddCompetitionsComponent {
  get isAddCompetitions(): boolean {
    return this.router.url.includes(
      'master/gamification/competitions/add-competitions'
    );
  }
  constructor(private router: Router) {}

  effectiveFrom: Date | null = null;

  @ViewChild('stepper') stepper!: MatStepper;

  private fb = inject(FormBuilder);
  private _formBuilder = inject(FormBuilder);

  // ! -----> DETAILS <-----
  firstFormGroup = this._formBuilder.group({
    currencyName: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  });

  // ! -----> TARGET AND PLAYERS <-----
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  isEditable = true;
}
