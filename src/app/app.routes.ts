import { Routes } from '@angular/router';
import { SampleComponent } from './Components/Login Pages/sample/sample.component';
import { ForgotPasswordComponent } from './Components/Login Pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    //Default route
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    //login Route
    path: 'home',
    component: SampleComponent,
  },
  {
    //login Route
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
];
