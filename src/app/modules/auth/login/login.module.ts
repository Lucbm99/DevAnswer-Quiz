import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { rotasLogin } from './login.routing';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rotasLogin),
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class LoginModule { }
