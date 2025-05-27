import { Component, inject, ViewChild, OnInit } from '@angular/core';
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
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StepNavigationService } from '../../../../../Services/step-navigation.service';

@Component({
  selector: 'app-add-competitions',
  standalone: true,
  imports: [
    FormsModule,
    SidebarModule,
    ButtonModule,
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
    MatTooltip,
  ],
  templateUrl: './add-competitions.component.html',
  styleUrl: './add-competitions.component.css',
})
export class AddCompetitionsComponent {
  sidebarVisible: boolean = false;

  get isAddCompetitions(): boolean {
    return this.router.url.includes(
      'master/gamification/competitions/add-competitions'
    );
  }

  date = new Date();
  curdt = this.date.getDate();

  ngOnInit(): void {
    console.log(this.curdt);
  }

  closeCard() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/gamification/competitions']);
    });
  }

  constructor(
    private router: Router,
    private stepService: StepNavigationService
  ) {}

  ngAfterViewInit() {
    if (this.stepService.stepToGo !== null) {
      this.stepper.selectedIndex = this.stepService.stepToGo;
      this.stepService.stepToGo = null; // Reset after navigation
    }
  }

  effectiveFrom: Date | null = null;
  @ViewChild('stepper') stepper!: MatStepper;

  private fb = inject(FormBuilder);
  private _formBuilder = inject(FormBuilder);

  currentStepIndex: number = 0;

  // ! -----> DETAILS <-----
  firstFormGroup = this._formBuilder.group({
    currencyName: ['1234', Validators.required],
    startDate: [``, Validators.required],
    endDate: ['', Validators.required],
    competitionType: ['player'],
  });

  // ! -----> TARGET AND PLAYERS <-----
  secondFormGroup = this._formBuilder.group({
    formula: ['', Validators.required],
    startDate_TandP: ['', Validators.required],
    endDate_TandP: ['', Validators.required],
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
