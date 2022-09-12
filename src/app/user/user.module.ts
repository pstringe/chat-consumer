import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    UserService,
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } }
  ]
})
export class UserModule { }
