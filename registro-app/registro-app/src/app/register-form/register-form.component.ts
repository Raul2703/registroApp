import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  nombre = '';
  apellidos = '';
  nif = '';
  email = '';
  telefono = '';
  sexo = '';
  comoConocio = '';
  password = '';
  confirmPassword = '';
  aceptaTerminos = false;

  opcionesConocio = ['Buscando en Google', 'A través de un amigo', 'Por mi profesor'];

  registrar() {
    if (this.password !== this.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }
    if (!this.aceptaTerminos) {
      console.error('Debes aceptar los términos y condiciones');
      return;
    }
    console.log('Nombre:', this.nombre);
    console.log('Apellidos:', this.apellidos);
    console.log('NIF:', this.nif);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Sexo:', this.sexo);
    console.log('Cómo conoció la página:', this.comoConocio);
    console.log('Contraseña:', this.password);
    console.log('Acepta términos:', this.aceptaTerminos);
  }
}
