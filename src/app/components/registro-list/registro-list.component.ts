import { Component, inject } from '@angular/core';
import { Iregistro } from 'src/app/interfaces/registro.interface';
import { DiarioService } from 'src/app/services/diario.service';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent {

  arrRegistros!: Iregistro[];

  diarioService = inject(DiarioService)

  async ngOnInit() {
    const response = await this.diarioService.getSomeRegistros();
    console.log(response);
    
    // for (let asiento of response) {
    //   asiento.fecha = ""
    // }

    this.arrRegistros = response
    
  }

}
