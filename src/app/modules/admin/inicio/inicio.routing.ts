import { Route } from '@angular/router';
import { InicioComponent } from './inicio.component';

export const rotaPaginaInicial: Route[] = [
    {
        path     : '',
        component: InicioComponent
    }
];