import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Usuario from '../../models/Usuario';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
  imports: [ CommonModule, ReactiveFormsModule ],
})

export class RegistroComponent {
  usuarioForm: FormGroup;
  usuarios: Usuario[] = [];
  isEditing: boolean = false;
  currentUsuarioId: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.usuarioForm = new FormGroup ({
      name: new FormControl,
      email: new FormControl,
      nif: new FormControl,
      password: new FormControl,
      telephone: new FormControl,
      role: new FormControl
    });
  }

  onSubmit() {
    const formData = this.usuarioForm.value;

    const nifPattern = /^\d{7,8}$/;
    const phonePattern = /^\d{9,15}$/;

    if (!nifPattern.test(String(formData.nif).trim())) {
      alert('El NIF/NIE debe contener solo números (7 u 8 dígitos) y sin letras.');
      return;
    }

    if (!phonePattern.test(String(formData.telephone).trim())) {
      alert('El teléfono debe contener solo números (mínimo 9) y sin espacios.');
      return;
    }

    const nuevoUsuario: Usuario = {
      name: formData.name,
      email: formData.email,
      nif: formData.nif,
      password: formData.password,
      telephone: formData.telephone,
      role: formData.role
    };

    // Validar que el email no exista ya en la base de datos
    this.usuarioService.read().subscribe((usuarios) => {
      const emailExistente = usuarios.find(u => u.email === nuevoUsuario.email);

      if (emailExistente) {
        alert('Ya existe un usuario registrado con este correo electrónico.');
        return;
      }

      this.usuarioService.create(nuevoUsuario)
        .then(() => {
          alert('Usuario registrado exitosamente en Firebase.');
          this.router.navigate(['inicio']);
        })
        .catch((error) => {
          console.error('Error al registrar el usuario:', error);
          alert('Ocurrió un error al registrar el usuario. Intente nuevamente.');
        });
    });
  }
}
