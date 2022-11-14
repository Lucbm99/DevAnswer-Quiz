import { rotaPaginaMobile } from './inicio-mobile.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { InicioMobileComponent } from './inicio-mobile.component';



@NgModule({
  declarations: [
    InicioMobileComponent
  ],
  imports: [
    RouterModule.forChild(rotaPaginaMobile),
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule  
  ]
})
export class InicioMobileModule { }
