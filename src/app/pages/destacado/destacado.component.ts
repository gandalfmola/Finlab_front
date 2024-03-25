import { Component, inject } from '@angular/core';
import { Iregistro } from 'src/app/interfaces/registro.interface';
import { DestacadosService } from 'src/app/services/destacados.service';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.component.html',
  styleUrls: ['./destacado.component.css']
})
export class DestacadoComponent {

  arrSubidas!: Iregistro[];
  arrBajadas!: Iregistro[];

  destacadosService = inject(DestacadosService)


  async ngOnInit() {
    const subidas = await this.destacadosService.getBestSubidas()
    console.log(subidas);

    const bajadas = await this.destacadosService.getBestBajadas()
    console.log(bajadas);
    
    
  }


}
