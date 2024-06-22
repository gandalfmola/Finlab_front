import { Component, Input, inject } from '@angular/core';
import { Iregistro } from 'src/app/interfaces/registro.interface';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent {

  // arrSubidas!: Iregistro[];
  arrSubidas!: any[];

  laboratorioService = inject(LaboratorioService)

  onRecibeFor($event:any[]) {
    console.log("Subidas pasa por el padre", $event);
    this.arrSubidas = $event
  }

}
