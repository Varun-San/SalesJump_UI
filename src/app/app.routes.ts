import { Routes } from '@angular/router';
import { SampleComponent } from './Components/Login Pages/sample/sample.component';
import { ForgotPasswordComponent } from './Components/Login Pages/forgot-password/forgot-password.component';
import { VerificationComponent } from './Components/Login Pages/verification/verification.component';
import { NewPasswordComponent } from './Components/Login Pages/new-password/new-password.component';
import { AlldoneComponent } from './Components/Login Pages/alldone/alldone.component';
import { ConfigurationComponent } from './Components/Setup/Configuration/configuration.component';
import { UserWiseSettingsComponent } from './Components/Setup/Configuration/User Wise Settings/user-wise-settings.component';
import { GeneralSettingsComponent } from './Components/Setup/Configuration/General Settings/general-settings.component';
import { LayoutComponent } from './Components/Layout/layout.component';
import { MastersComponent } from './Components/Masters/masters.component';
import { BasicDetailsComponent } from './Components/Masters/Basic-details/basic-details.component';
import { Component } from '@angular/core';
import { CompanyComponent } from './Components/Masters/Basic-details/Company/company.component';
import { DivisionComponent } from './Components/Masters/Basic-details/Division/division.component';
import { DesignationComponent } from './Components/Masters/Basic-details/Designation/designation.component';
import { HeadQuartersComponent } from './Components/Masters/Basic-details/Head Quarters/head-quarters.component';
import { WorkTypeComponent } from './Components/Masters/Basic-details/Work Type/work-type.component';
import { HoUserComponent } from './Components/Masters/Basic-details/HO Users/ho-user.component';
import { AddDivisionComponent } from './Components/Masters/Basic-details/Add Division/add-division.component';
import { AddDesignationComponent } from './Components/Masters/Basic-details/Add Designation/add-designation.component';

export const routes: Routes = [
  {
    // Default route
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    // Home-Page
    path: 'home',
    component: SampleComponent,
  },
  {
    // Forgot-Password
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    // Verification
    path: 'verification',
    component: VerificationComponent,
  },
  {
    // New-Password
    path: 'newpassword',
    component: NewPasswordComponent,
  },
  {
    // All-Done
    path: 'password_alldone',
    component: AlldoneComponent,
  },
  {
    // Routes for the layout section (without "layout" prefix)
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'configuration',
        component: ConfigurationComponent,
        children: [
          {
            path: 'general-settings',
            component: GeneralSettingsComponent,
          },
          {
            path: 'user-settings',
            component: UserWiseSettingsComponent,
          },
        ],
      },
      {
        path: 'master',
        component: MastersComponent,
        children: [
          {
            path: 'basic_details',
            component: BasicDetailsComponent,
            children: [
              {
                path: 'company',
                component: CompanyComponent,
              },
              {
                path: 'division',
                component: DivisionComponent,
              },
              {
                path: 'designation',
                component: DesignationComponent,
              },
              {
                path: 'head-quarters',
                component: HeadQuartersComponent,
              },
              {
                path: 'work-type',
                component: WorkTypeComponent,
              },
              {
                path: 'ho-user',
                component: HoUserComponent,
              },
              {
                path: 'add-division',
                component: AddDivisionComponent,
              },
              {
                path: 'add-designation',
                component: AddDesignationComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];
