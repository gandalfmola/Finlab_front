import { Component, Input } from '@angular/core';
import { Iregistro } from 'src/app/interfaces/registro.interface';

@Component({
  selector: 'app-registro-card',
  templateUrl: './registro-card.component.html',
  styleUrls: ['./registro-card.component.css']
})
export class RegistroCardComponent {

  @Input() registroMostrar!: Iregistro;

  constructor() {
    this.registroMostrar = {
      fecha: "2024-02-13",
      empresa: "GOOGL",
      valor_apertura: 146.08,
      max: 146.52,
      min: 144.094,
      valor_cierre: 145.94,
      variacion_neta: -0.14,
      variacion_porcentaje: -0.000959298
    }
  }

}
