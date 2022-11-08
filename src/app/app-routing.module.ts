import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/auth/login/login.module';
import { EsquecerSenhaModule } from './modules/auth/esquecer-senha/esquecer-senha.module';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/auth/login/login.module').then(m => m.LoginModule)},
  {path: 'esquecer-senha', loadChildren: () => import('./modules/auth/esquecer-senha/esquecer-senha.module').then(m => m.EsquecerSenhaModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
