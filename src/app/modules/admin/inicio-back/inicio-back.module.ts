import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { InicioBackComponent } from './inicio-back.component';
import { rotaPaginaBack } from './inicio-back.routing';



@NgModule({
  declarations: [
    InicioBackComponent
  ],
  imports: [
    RouterModule.forChild(rotaPaginaBack),
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class InicioBackModule { }
