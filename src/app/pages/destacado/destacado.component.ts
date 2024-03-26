import { Component, inject } from '@angular/core';
import { IregistroCorto } from 'src/app/interfaces/registro-corto.interface';
import { Iregistro } from 'src/app/interfaces/registro.interface';
import { DestacadosService } from 'src/app/services/destacados.service';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.component.html',
  styleUrls: ['./destacado.component.css']
})
export class DestacadoComponent {

  arrSubidas: IregistroCorto[] = []
  arrBajadas: IregistroCorto[] = []

  destacadosService = inject(DestacadosService)


  async ngOnInit() {
    const subidas = await this.destacadosService.getBestSubidas()
    this.arrSubidas = this.destacadosService.transformArray(subidas, this.arrSubidas)

    const bajadas = await this.destacadosService.getBestBajadas()    
    this.arrBajadas = this.destacadosService.transformArray(bajadas, this.arrBajadas)
    
  }


}
