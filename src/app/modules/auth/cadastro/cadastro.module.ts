import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { rotaCadastro } from './cadastro.routing';
import { CadastroComponent } from './cadastro.component';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    RouterModule.forChild(rotaCadastro),
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class CadastroModule { }
