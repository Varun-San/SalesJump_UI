import {
  Component,
  inject,
  ViewChild,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
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
    const team_head = sessionStorage.getItem('selectedPlayers_Head');
    const stored = sessionStorage.getItem('competitionData');
    this.loadSelectedPlayersFromSession();

    console.log(data);
    console.log(team_head);

    if (team_head) {
      this.selectedPlayers_Head = JSON.parse(team_head);
      this.selected_players_Head = this.selectedPlayers_Head.length;
    }

    if (data) {
      this.selectedPlayers = JSON.parse(data);
      this.selected_players = this.selectedPlayers.length;
    }

    if (stored) {
      if (stored) {
        const sessionData = JSON.parse(stored);
        if (sessionData.step1) {
          this.firstFormGroup.patchValue(sessionData.step1);
          this.competitionType = sessionData.step1.competitionType;
        }
      }

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

      // Live updates from radio changes
      this.firstFormGroup
        .get('competitionType')
        ?.valueChanges.subscribe((value) => {
          this.competitionType = value ?? '';
        });
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
  competitionType: string | null = '';

  // ! -----> DETAILS <-----
  firstFormGroup = this._formBuilder.group({
    competitionTitle: ['1234', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    competitionType: ['', Validators.required],
  });

  onFirstStepNext(): void {
    const step1Data = this.firstFormGroup.value;
    const stored = sessionStorage.getItem('competitionData');
    let sessionData = stored ? JSON.parse(stored) : {};

    sessionData.step1 = step1Data;
    sessionStorage.setItem('competitionData', JSON.stringify(sessionData));
    this.stepService.stepToGo = 1;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(
        ['/master/gamification/competitions/add-competitions'],
        {
          queryParams: { reload: new Date().getTime() },
        }
      );
    });
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
  selected_players: number = 0; 

  removePlayer(index: number): void {
    this.selectedPlayers.splice(index, 1);
    this.selected_players = this.selectedPlayers.length;
    sessionStorage.setItem(
      'selectedPlayers',
      JSON.stringify(this.selectedPlayers)
    );
  }

  // ! CREATING THE TEAM HEAD

  addTeamHead() {
    this.teamBlocks.push({
      teamHead: this.teamHead,
      teamName: this.teamName,
      prdtImage: this.prdtImage,
      imagePreviews: [...this.imagePreviews],
    });

    this.selected_players_Head = this.teamBlocks.length;

    // Save updated blocks
    sessionStorage.setItem(
      'selectedPlayers_Head',
      JSON.stringify(this.teamBlocks)
    );

    // Clear form
    this.teamHead = '';
    this.teamName = '';
    this.prdtImage = '';
    this.imagePreviews = [];
    this.imageFiles = [];
  }

  removeTeamHead(index: number) {
    this.teamBlocks.splice(index, 1);

    // Update the count
    this.selected_players_Head = this.teamBlocks.length;

    // Optionally, update session storage
    sessionStorage.setItem(
      'selectedPlayers_Head',
      JSON.stringify(this.teamBlocks)
    );
  }

  selectedPlayers_Head: any[] = [];
  selected_players_Head: number = 0;

  loadSelectedPlayersFromSession() {
    const stored = sessionStorage.getItem('selectedPlayers_Head');
    if (stored) {
      const players = JSON.parse(stored);
      this.teamBlocks = players.map((player: any) => ({
        teamHead: player.name,
        teamName: '',
        prdtImage: '',
        imagePreviews: [],
      }));
      this.selected_players_Head = this.teamBlocks.length;
      this.teamHeadList = players.map((p: any) => ({ name: p.name }));
    }
  }

  teamBlocks: TeamBlock[] = [];

  teamHead: any = null; // ? States
  teamName: any = null;
  teamHeadList: { name: string }[] = [];

  prdtImage: string = '';

  imagePreviews: string[] = [];
  imageFiles: File[] = [];

  @ViewChildren('fileInput') fileInputs!: QueryList<
    ElementRef<HTMLInputElement>
  >;

  triggerFileUpload(index: number) {
    const input = this.fileInputs.toArray()[index];
    input.nativeElement.click();
  }

  onImageSelected(event: Event, index: number) {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      const block = this.teamBlocks[index];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          block.imagePreviews.push(reader.result as string);
          block.prdtImage = block.imagePreviews
            .map((_, i) => `Image ${i + 1}`)
            .join(', ');
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removeImage(blockIndex: number, imageIndex: number) {
    const block = this.teamBlocks[blockIndex];
    block.imagePreviews.splice(imageIndex, 1);
    block.prdtImage = block.imagePreviews
      .map((_, i) => `Image ${i + 1}`)
      .join(', ');
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

interface TeamBlock {
  teamHead: string;
  teamName: string;
  prdtImage: string;
  imagePreviews: string[];
}
