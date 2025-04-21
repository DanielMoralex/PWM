import { Routes, provideRouter } from '@angular/router';
import { ColegioComponent } from './components/colegio/colegio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilProfesorComponent } from './components/perfil-profesor/perfil-profesor.component';
import { PerfilAlumnoComponent} from './components/perfil-alumno/perfil-alumno.component';

const routes: Routes = [
  {
    path: '',
    component: ColegioComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'perfil-alumno',
    component: PerfilAlumnoComponent
  },
  {
    path: 'perfil-profesor',
    component: PerfilProfesorComponent
  }
];

export const appConfig = {
  providers: [
    provideRouter(routes)
  ]
};

