import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-formulario-parametros',
  templateUrl: './formulario-parametros.component.html',
  styleUrls: ['./formulario-parametros.component.css']
})
export class FormularioParametrosComponent {

  formulario: FormGroup;

  laboratorioService = inject(LaboratorioService)

  @Output() enviaFor: EventEmitter<any[]> = new EventEmitter()

  constructor() {
    this.formulario = new FormGroup({
      subida: new FormControl(),
      lapso: new FormControl(),
      beneficio: new FormControl()
    })
  }

  async enviado() {
    const seleccionFor = this.formulario.value
    console.log(seleccionFor);
    console.log("Esto es subida");    
    console.log(seleccionFor.subida);
    console.log(typeof seleccionFor.subida);
    
    const response = await this.laboratorioService.getTramos(seleccionFor.subida, seleccionFor.lapso, seleccionFor.beneficio)
    // console.log(response);
    this.enviaFor.emit(response)
    
    
  }

}
