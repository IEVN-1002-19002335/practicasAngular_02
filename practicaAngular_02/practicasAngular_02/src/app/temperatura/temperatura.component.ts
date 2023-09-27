import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {
  conversionType: string = 'celsius'; // convertir de Celsius a Fahrenheit
  temperatura: number = 0;
  resultado: number = 0;

  calcular() {
    if (this.conversionType === 'celsius') {
      //  Celsius a Fahrenheit
      this.resultado = (this.temperatura * 9/5) + 32;
    } else {
      // Fahrenheit a Celsius
      this.resultado = (this.temperatura - 32) * 5/9;
    }
  }
}
