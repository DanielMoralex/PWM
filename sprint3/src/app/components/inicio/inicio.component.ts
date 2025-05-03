import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {UsuarioService} from '../../services/usuario.service';

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

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  async onLogin() {
    // Verificar si el usuario existe en la base de datos
    const usuario = await this.usuarioService.getUsuarioByEmail(this.email);

    if (!usuario) {
      alert('❌ No hay usuarios registrados con ese correo. Regístrate primero.');
      return;
    }

    // Verificar la contraseña
    if (usuario.password === this.password) {
      alert('✅ Inicio de sesión exitoso.');

      // Codificar el email
      const encodedName = encodeURIComponent(usuario.email);

      // Redirigir según el rol del usuario
      if (usuario.role === 'profesor') {
        this.router.navigate(['perfil-profesor'], { queryParams: { user: encodedName } });
      } else {
        this.router.navigate(['perfil-alumno'], { queryParams: { user: encodedName } });
      }
    } else {
      alert('❌ Correo o contraseña incorrectos.');
    }
  }
}
