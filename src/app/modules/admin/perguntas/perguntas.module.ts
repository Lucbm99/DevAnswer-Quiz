import { rotasPerguntas } from './perguntas.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { PerguntasComponent } from './perguntas.component';


@NgModule({
  declarations: [
    PerguntasComponent
  ],
  imports: [
    RouterModule.forChild(rotasPerguntas),
    CommonModule,
    MatRadioModule
  ]
})
export class PerguntasModule { }
