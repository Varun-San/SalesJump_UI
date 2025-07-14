import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerificationComponent } from './verification/verification.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { AlldoneComponent } from './alldone/alldone.component';

const routes: Routes = [
  {
    // Default route
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    // login-Page
    path: 'login',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPagesRoutingModule {}
