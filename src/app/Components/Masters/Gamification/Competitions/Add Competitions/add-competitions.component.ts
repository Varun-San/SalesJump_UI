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
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './add-competitions.component.html',
  styleUrl: './add-competitions.component.css',
})
export class AddCompetitionsComponent implements OnInit {
  ngOnInit(): void {
    const data = sessionStorage.getItem('selectedPlayers');
    if (data) {
      this.selectedPlayers = JSON.parse(data);
      this.selected_players = this.selectedPlayers.length;
    }

    const stored = sessionStorage.getItem('competitionData');
    if (stored) {
      const sessionData = JSON.parse(stored);
      if (sessionData.step1) {
        this.firstFormGroup.patchValue(sessionData.step1);
      }
      if (sessionData.step2) {
        this.secondFormGroup.patchValue(sessionData.step2);
      }
      const players = sessionStorage.getItem('selectedPlayers');
      if (players) {
        this.selectedPlayers = JSON.parse(players);
        this.selected_players = this.selectedPlayers.length;
      }
    }
  }

  faSearch = faSearch;

  sidebarVisible: boolean = false;

  get isAddCompetitions(): boolean {
    return this.router.url.includes(
      'master/gamification/competitions/add-competitions'
    );
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
      this.stepService.stepToGo = null; // Reset after using
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

  onFirstStepNext(): void {
    const step1Data = this.firstFormGroup.value;
    const stored = sessionStorage.getItem('competitionData');
    let sessionData = stored ? JSON.parse(stored) : {};

    sessionData.step1 = step1Data;
    sessionStorage.setItem('competitionData', JSON.stringify(sessionData));
  }

  // ! -----> TARGET AND PLAYERS <-----
  secondFormGroup = this._formBuilder.group({
    formula: ['', Validators.required],
    startDate_TandP: ['', Validators.required],
    endDate_TandP: ['', Validators.required],
  });
  onSecondStepNext(): void {
    const step2Data = this.secondFormGroup.value;
    const stored = sessionStorage.getItem('competitionData');
    let sessionData = stored ? JSON.parse(stored) : {};

    sessionData.step2 = step2Data;
    sessionStorage.setItem('competitionData', JSON.stringify(sessionData));
  }

  // ! -----> SELECTED PLAYERS <-----
  selectedPlayers: any[] = [];
  selected_players: number = 0; // ✅ Add this line

  removePlayer(index: number): void {
    this.selectedPlayers.splice(index, 1);
    this.selected_players = this.selectedPlayers.length;
    sessionStorage.setItem(
      'selectedPlayers',
      JSON.stringify(this.selectedPlayers)
    );
  }

  // ? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
