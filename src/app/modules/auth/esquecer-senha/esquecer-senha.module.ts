import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { EsquecerSenhaComponent } from './esquecer-senha.component';
import { rotaEsquecerSenha } from './esquecer-senha.routing';


@NgModule({
  declarations: [
    EsquecerSenhaComponent
  ],
  imports: [
    RouterModule.forChild(rotaEsquecerSenha),
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class EsquecerSenhaModule { }
