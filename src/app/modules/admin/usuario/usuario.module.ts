import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsuarioComponent } from './usuario.component';
import { rotaUsuario } from './usuario.routing';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    RouterModule.forChild(rotaUsuario),
    CommonModule,
    MatInputModule, 
    MatFormFieldModule
  ]
})
export class UsuarioModule { }
