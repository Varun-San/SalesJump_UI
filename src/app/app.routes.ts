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
      },
      {
        path: 'basic_details',
        component: BasicDetailsComponent,
        // children: [
        //   { path: 'company', component: CompanyComponent },
        //   { path: 'division', component: DivisionComponent },
        //   { path: 'designation', component: DesignationComponent },
        //   { path: 'head-quarters', component: HeadQuartersComponent },
        //   { path: 'work-type', component: WorkTypeComponent },
        //   { path: 'ho-user', component: HOUserComponent },
        // ],
      },
    ],
  },
];
