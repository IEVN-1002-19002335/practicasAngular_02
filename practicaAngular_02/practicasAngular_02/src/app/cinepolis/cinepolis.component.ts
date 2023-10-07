import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  cantidadCompradores: number = 0;
  tarjetaCineco: string = 'no';
  cantidadBoletos: number = 0;
  totalPagar: string = '0';
  maxBoletasPorPersona: number=7;
  descuentosAplicados: string[] = []; // descuentos aplicados
  
  calcularDescuento() {
      // Validar que la cantidad de boletas no exceda el límite por persona
      if (this.cantidadCompradores > 0 && this.cantidadBoletos / this.cantidadCompradores > this.maxBoletasPorPersona) {
        alert(`No se pueden comprar más de 7 boletas por persona.`);
        return;
      }
    
    this.descuentosAplicados = [];
    let descuento = 0;

    if (this.cantidadBoletos > 5) {
      descuento = 0.15;
      this.descuentosAplicados.push('Descuento del 15% por compra de más de 5 boletos');
    } else if (this.cantidadBoletos >= 3) {
      descuento = 0.10;
      this.descuentosAplicados.push('Descuento del 10% por compra de 3 a 5 boletos');
    }

    let precioSinDescuento = this.cantidadBoletos * 12.000;
    let precioConDescuento = precioSinDescuento * (1 - descuento);

    if (this.tarjetaCineco === 'si') {
      precioConDescuento *= 0.90; //descuento adicional del 10% con tarjeta cineco
      this.descuentosAplicados.push('Descuento adicional del 10% por usar tarjeta cineco');
    }

    this.totalPagar = precioConDescuento === 0 ? 'Ingresa un valor' : precioConDescuento.toFixed(2);
  }
  salir(){
    alert(`Adios, gracias por elegir Cinepolis😘`);
  }
}
