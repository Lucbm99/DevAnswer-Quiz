import { NgModule } from '@angular/core';
import { rotasLogin } from './login.routing';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(rotasLogin),
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ]
})
export class LoginModule { }
