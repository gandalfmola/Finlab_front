import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-desplegable-intervalo',
  templateUrl: './desplegable-intervalo.component.html',
  styleUrls: ['./desplegable-intervalo.component.css']
})
export class DesplegableIntervaloComponent {

  // aquí recibimos el array de intervalos desde el componente padre
  @Input() arrIntervalos!: string[];

  // aquí creamos el evento que recoge la selección del intervalo que ha hecho el usuario
  @Output() elegidoIntervalo: EventEmitter<String> = new EventEmitter()

  selectIntervalo(seleccion: any) {    
    let intervalo = seleccion.target.value

    // envíamos la selección de intervalo al componente padre
    this.elegidoIntervalo.emit(intervalo)
    
    
    
  }

}
