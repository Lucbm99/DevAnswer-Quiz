import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/auth/login/login.module').then(m => m.LoginModule)},
  {path: 'esquecer-senha', loadChildren: () => import('./modules/auth/esquecer-senha/esquecer-senha.module').then(m => m.EsquecerSenhaModule)},
  {path: 'cadastro', loadChildren: () => import('./modules/auth/cadastro/cadastro.module').then(m => m.CadastroModule)},
  {path: 'inicio', loadChildren: () => import('./modules/admin/inicio/inicio.module').then(m => m.InicioModule)},
  {path: 'inicio-back', loadChildren: () => import('./modules/admin/inicio-back/inicio-back.module').then(m => m.InicioBackModule)},
  {path: 'inicio-mobile', loadChildren: () => import('./modules/admin/inicio-mobile/inicio-mobile.module').then(m => m.InicioMobileModule)},
  {path: 'usuario', loadChildren: () => import('./modules/admin/usuario/usuario.module').then(m => m.UsuarioModule)},
  {path: 'perguntas', loadChildren: () => import('./modules/admin/perguntas/perguntas.module').then(m => m.PerguntasModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
