import { Routes } from '@angular/router';
import { SampleComponent } from './Components/Login Pages/sample/sample.component';
import { ForgotPasswordComponent } from './Components/Login Pages/forgot-password/forgot-password.component';
import { VerificationComponent } from './Components/Login Pages/verification/verification.component';
import { NewPasswordComponent } from './Components/Login Pages/new-password/new-password.component';
import { AlldoneComponent } from './Components/Login Pages/alldone/alldone.component';

export const routes: Routes = [
  {
    //Default route
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    //Home-Page
    path: 'home',
    component: SampleComponent,
  },
  {
    //Forgot-Password
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    //Verification
    path: 'verification',
    component: VerificationComponent,
  },
  {
    //New-Password
    path: 'newpassword',
    component: NewPasswordComponent,
  },
  {
    //All-Done
    path: 'password_alldone',
    component: AlldoneComponent,
  },
];
