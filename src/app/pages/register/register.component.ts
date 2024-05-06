import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/auth-service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formData = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.formData).subscribe((response: any) => {
      // Manejar la respuesta (redirigir, mostrar mensaje, etc.)
      this.router.navigate(['/tutorial']);
    }, (error) => {
      // Manejar errores (mostrar mensaje de error, etc.)
    });
  }
}
