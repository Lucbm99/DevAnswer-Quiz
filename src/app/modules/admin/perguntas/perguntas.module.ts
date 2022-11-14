import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { PerguntasComponent } from './perguntas.component';
import { rotasPerguntas } from './perguntas.routing';


@NgModule({
  declarations: [
    PerguntasComponent
  ],
  imports: [
    RouterModule.forChild(rotasPerguntas),
    CommonModule,
    MatRadioModule,
    MatCardModule
  ]
})
export class PerguntasModule { }
