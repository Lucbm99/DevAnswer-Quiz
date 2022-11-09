import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { rotaPaginaInicial } from './inicio.routing';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    RouterModule.forChild(rotaPaginaInicial),
    CommonModule,
    MatIconModule
  ]
})
export class InicioModule { }
