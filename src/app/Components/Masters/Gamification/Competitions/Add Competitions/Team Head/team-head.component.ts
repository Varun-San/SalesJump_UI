import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StepNavigationService } from '../../../../../../Services/step-navigation.service';
@Component({
  selector: 'app-team-head',
  imports: [
    NgIf,
    RouterModule,
    NgSelectModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './team-head.component.html',
  styleUrl: './team-head.component.css',
})
export class TeamHeadComponent {
  faSearch = faSearch;

  constructor(
    private router: Router,
    private stepService: StepNavigationService
  ) {}
  get isAddTeamHead(): boolean {
    return this.router.url.includes(
      'master/gamification/competitions/add-competitions/team-head'
    );
  }

  // ! Variables
  state: any = null;
  division: any = null;
  designation: any = null;
  role: any = null;
  id: any = null;
  // ! Options List

  // ? States
  stateList: { name: string }[] = [
    { name: 'Maharashtra' },
    { name: 'Karnataka' },
    { name: 'Tamil Nadu' },
    { name: 'Uttar Pradesh' },
    { name: 'Gujarat' },
    { name: 'Rajasthan' },
    { name: 'West Bengal' },
    { name: 'Bihar' },
    { name: 'Punjab' },
    { name: 'Kerala' },
  ];

  // ? Division List
  divisionList: { name: string }[] = [
    { name: 'FMCG' },
    { name: 'PHARMA' },
    { name: '2GROW HR' },
    { name: 'LEAD FORCE' },
  ];

  // ? Designation List
  designationList: { name: string }[] = [
    { name: 'Software Engineer' },
    { name: 'Project Manager' },
    { name: 'Business Analyst' },
    { name: 'HR Manager' },
    { name: 'Quality Assurance Engineer' },
  ];

  // ! Employee List
  selectAll: boolean = false;
  employeeList = [
    {
      name: 'Augustin',
      designation: 'RSM Chennai',
      profileImage: 'Assets/Gamification/Profile Picture_1.svg',
      selected: false,
    },
    {
      name: 'Priya',
      designation: 'ASM Bangalore',
      profileImage: 'Assets/Gamification/Profile Picture_1.svg',
      selected: false,
    },
    {
      name: 'Rahul',
      designation: 'ZSM Delhi',
      profileImage: 'Assets/Gamification/Profile Picture_1.svg',
      selected: false,
    },
  ];

  getSelectedCount(): number {
    return this.employeeList.filter((emp) => emp.selected).length;
  }
  toggleSelectAll() {
    this.employeeList.forEach((emp) => (emp.selected = this.selectAll));
  }

  updateSelectAllStatus() {
    this.selectAll = this.employeeList.every((emp) => emp.selected);
  }

  closeCard() {
    this.stepService.stepToGo = 1;

    this.router
      .navigateByUrl('/master/gamification/competitions/add-competitions', {
        skipLocationChange: true,
      })
      .then(() => {
        this.router.navigate(
          ['/master/gamification/competitions/add-competitions'],
          {
            queryParams: { reload: new Date().getTime() },
          }
        );
      });
  }

  // getSelectedPlayers_Head() {
  //   const selected = this.employeeList.filter((emp) => emp.selected);
  //   sessionStorage.setItem('selectedPlayers_Head', JSON.stringify(selected));

  //   // Instead of reloading, just navigate back
  //   this.stepService.stepToGo = 1;
  //   this.router.navigate([
  //     '/master/gamification/competitions/add-competitions',
  //   ]);
  //   this.closeCard();
  // }

  getSelectedPlayers_Head() {
    const selected = this.employeeList.filter((emp) => emp.selected);
    sessionStorage.setItem('selectedPlayers_Head', JSON.stringify(selected));
    this.stepService.stepToGo = 1;
    this.router.navigate([
      '/master/gamification/competitions/add-competitions',
    ]);
  }
}
