import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserService } from '../services/user/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
