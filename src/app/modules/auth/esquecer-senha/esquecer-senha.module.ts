import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsquecerSenhaComponent } from './esquecer-senha.component';
import { RouterModule } from '@angular/router';
import { rotaEsquecerSenha } from './esquecer-senha.routing';


@NgModule({
  declarations: [
    EsquecerSenhaComponent
  ],
  imports: [
    RouterModule.forChild(rotaEsquecerSenha),
    CommonModule
  ]
})
export class EsquecerSenhaModule { }
