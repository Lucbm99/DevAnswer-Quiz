import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { InicioComponent } from './inicio.component';
import { rotaPaginaInicial } from './inicio.routing';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    RouterModule.forChild(rotaPaginaInicial),
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class InicioModule { }
