import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPagesRoutingModule } from './login-pages-routing.module';
import { SampleComponent } from './sample/sample.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerificationComponent } from './verification/verification.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { AlldoneComponent } from './alldone/alldone.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginPagesRoutingModule,
    SampleComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    NewPasswordComponent,
    AlldoneComponent,
  ],
})
export class LoginPagesModule {}
