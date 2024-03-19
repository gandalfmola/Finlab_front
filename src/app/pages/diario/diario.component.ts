import { Component, inject } from '@angular/core';
import { DiarioService } from 'src/app/services/diario.service';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent {

  diarioService = inject(DiarioService)


  async cargaBase() {

    this.diarioService.prueba("2024-03-15", "2024-03-19")    

    // let fechaComienzo = "2022-03-05"
    // console.log(fechaComienzo);
    // const fechaActual = "2022-03-30"
    // console.log(fechaActual);

    // console.log(fechaComienzo.localeCompare(fechaActual));   
    

    // while(fechaComienzo.localeCompare(fechaActual) != 0) {
    //   console.log("ENTRA EN EL BUCLE");
      

    //   let response = await this.diarioService.registerDay(fechaComienzo);     


    //   const fechaNumber = this.diarioService.deStringToNumber(fechaComienzo)
    //   const fechaMasUno = this.diarioService.sumaUnDia(fechaNumber)       
    //   const fechaString = this.diarioService.deNumberToString(fechaMasUno)
    //   fechaComienzo = fechaString
    // }
    
    // console.log("FIN DEL BUCLE");
    // console.log("fecha comienzo: ", fechaComienzo);
    
    
    
  }
}
