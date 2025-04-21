import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  email = '';
  password = '';

  constructor (private router: Router) {}

  onLogin() {
    const storedProfileJSON = localStorage.getItem('perfil');
    if (!storedProfileJSON) {
      alert('❌ No hay usuarios registrados. Regístrate primero.');
      return;
    }

    const storedProfile = JSON.parse(storedProfileJSON);

    if (storedProfile.email === this.email && storedProfile.password === this.password) {
      alert('✅ Inicio de sesión exitoso.');

      const encodedName = encodeURIComponent(storedProfile.email);

      if (storedProfile.role === 'profesor') {
        alert("Se va a redirigir a 'Mi Página'");
        this.router.navigate(['perfil-profesor'], { queryParams: { user: encodedName } });
      } else {
        this.router.navigate(['perfil-alumno'], { queryParams: { user: encodedName } });
      }
    }

    else {
      alert('❌ Correo o contraseña incorrectos.');
    }
  }
}
