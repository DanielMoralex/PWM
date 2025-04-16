import { Routes, provideRouter } from '@angular/router';
import { ColegioComponent } from './components/colegio/colegio.component';

const routes: Routes = [
  {
    path: '',
    component: ColegioComponent
  }
];

export const appConfig = {
  providers: [
    provideRouter(routes)
  ]
};

