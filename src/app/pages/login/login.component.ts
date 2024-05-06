import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/auth-service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.formData).subscribe((response: any) => {
      // Manejar la respuesta (redirigir, mostrar mensaje, etc.)
      this.router.navigate(['/tutorial']);
    }, (error) => {
      // Manejar errores (mostrar mensaje de error, etc.)
    });
  }
}
