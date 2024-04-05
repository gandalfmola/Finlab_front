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

  listaIntervalos: string[] = ["última semana", "último mes", "último trimestre", "último año"]

  destacadosService = inject(DestacadosService)


  async ngOnInit() {
    const subidas = await this.destacadosService.getBestSubidasInt(5)
    this.arrSubidas = this.destacadosService.transformArray(subidas, this.arrSubidas)

    const bajadas = await this.destacadosService.getBestBajadasInt(5)    
    this.arrBajadas = this.destacadosService.transformArray(bajadas, this.arrBajadas)
    
  }

  async intervaloSeleccionado($event:String) {
    console.log($event, "en el padre");
    let seleccion = 0

    switch($event) {
      case "última semana":
        seleccion = 7;
        break;
      case "último mes":
        seleccion = 30;
        break;
      case "último trimestre":
        seleccion = 90;
        break;
      case "último año":
        seleccion = 365;
        break;
      default:
        seleccion = 7;
        console.log("que haces cabrón");
        break;        
    }
    console.log(seleccion);

    const subidas = await this.destacadosService.getBestSubidasInt(seleccion)
    console.log(subidas);
    this.arrSubidas = [];
    this.arrSubidas = this.destacadosService.transformArray(subidas, this.arrSubidas)
    
    const bajadas = await this.destacadosService.getBestBajadasInt(seleccion)
    console.log(bajadas);
    this.arrBajadas = [];
    this.arrBajadas = this.destacadosService.transformArray(bajadas, this.arrBajadas)
    

    
  }


}
