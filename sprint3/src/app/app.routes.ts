import { Routes } from '@angular/router';
import { ColegioComponent } from './components/colegio/colegio.component';
import { RegistroComponent} from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilAlumnoComponent} from './components/perfil-alumno/perfil-alumno.component';
import { PerfilProfesorComponent} from './components/perfil-profesor/perfil-profesor.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { NoticiasComponent} from './components/noticias/noticias.component';

export const routes: Routes = [
  { path: '', component: ColegioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil-alumno', component: PerfilAlumnoComponent },
  { path: 'perfil-profesor', component: PerfilProfesorComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'noticias', component: NoticiasComponent },
];
