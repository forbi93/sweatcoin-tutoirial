import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf,
    FormsModule
  ],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css'
})
export class TutorialComponent {
  showAdditionalSteps = false;
  code: string = '';

  onSubmitCode() {
    // Verificamos si el código ingresado es igual a "2415874"
    if (this.code === '2415874') {
      // Si coincide, mostramos los pasos adicionales
      this.showAdditionalSteps = true;
    } else {
      // Si el código no coincide, podrías mostrar un mensaje de error o tomar alguna otra acción
      console.log('El código ingresado no es válido');
    }
  }

  tutorialTitle = '¡Bienvenido al Tutorial de Sweatcoin!\n' +
    '\n';
  tutorialSteps = [
    { description: 'Antes de comenzar, queremos asegurarnos de que tengas la mejor experiencia posible con nuestra aplicación. Es importante destacar que este tutorial está diseñado para aquellos que aún no han tenido la oportunidad de explorar nuestra plataforma. Si ya has descargado nuestra aplicación anteriormente, te recomendamos cerrar esta ventana y acceder directamente a tu cuenta. ' +
        '¿Por qué es importante registrarse a través del enlace proporcionado? Porque al hacerlo, no solo estarás accediendo a una versión especial de nuestro tutorial, sino que también te garantizaremos el acceso a un código exclusivo que desbloqueará contenido adicional y beneficios únicos dentro de la aplicación. ' +
        'No te preocupes, si es la primera vez que nos visitas, estás en el lugar correcto. Simplemente sigue adelante y haz clic en el botón de registro a continuación para comenzar tu viaje con nosotros. ¡Te prometemos que será una experiencia emocionante!' },
    { description: 'Paso 2: Consectetur adipiscing elit' },
    { description: 'Paso 3: Sed do eiusmod tempor incididunt' },
    // Agrega más pasos si es necesario
  ];
}
