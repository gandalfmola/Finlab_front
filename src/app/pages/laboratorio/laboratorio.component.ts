import { Component, inject } from '@angular/core';
import { Iregistro } from 'src/app/interfaces/registro.interface';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent {

  arrSubidas!: Iregistro[];

  laboratorioService = inject(LaboratorioService)

  async pulsaEnviar() {
    // this.laboratorioService.getTramos()
  }

}
