import { Routes, provideRouter } from '@angular/router';
import { ColegioComponent } from './components/colegio/colegio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilProfesorComponent } from './components/perfil-profesor/perfil-profesor.component';
import { PerfilAlumnoComponent} from './components/perfil-alumno/perfil-alumno.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { NoticiasComponent} from './components/noticias/noticias.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
  },
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  }
];

export const appConfig = {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "colegio-990ed", appId: "1:464463498165:web:b90fb6ce2ad832f1bb27fc", storageBucket: "colegio-990ed.firebasestorage.app", apiKey: "AIzaSyC-in5TC-lPvOdUrahqJWfzm5mxbddtZlc", authDomain: "colegio-990ed.firebaseapp.com", messagingSenderId: "464463498165", measurementId: "G-PPZH6S6WJE" })), provideFirestore(() => getFirestore())
  ]
};

