import { Routes, provideRouter } from '@angular/router';
import { ColegioComponent } from './components/colegio/colegio.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: ColegioComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

export const appConfig = {
  providers: [
    provideRouter(routes)
  ]
};

