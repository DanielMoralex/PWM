import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
  imports: [CommonModule, FormsModule],
})

export class RegistroComponent {
  formData = {
    name: '',
    email: '',
    nif: '',
    password: '',
    phone: '',
    role: '',
  };

  constructor(private router: Router) {}

  onSubmit() {
    const nifPattern = /^\d{7,8}$/;
    const phonePattern = /^\d{9,15}$/;

    if (!nifPattern.test(this.formData.nif.trim())) {
      alert('❌ El NIF/NIE debe contener solo números (7 u 8 dígitos) y sin letras.');
      return;
    }

    if (!phonePattern.test(this.formData.phone.trim())) {
      alert('❌ El teléfono debe contener solo números (mínimo 9) y sin espacios.');
      return;
    }

    // Guardar en localStorage
    localStorage.setItem('perfil', JSON.stringify(this.formData));
    alert('✅ Registro guardado en el navegador.');

    // Redirección
    this.router.navigate(['inicio']);
  }
}
