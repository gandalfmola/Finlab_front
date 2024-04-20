import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Iregistro } from '../interfaces/registro.interface';

@Injectable({
  providedIn: 'root'
})
export class DiarioService {

  httpClient = inject(HttpClient)

  // este método trae todos los registros que haya en registro_diario
  getAllRegistros() {
    return firstValueFrom(
      this.httpClient.get<Iregistro[]>("http://localhost:3000/api/diariofecha")
    )
  }

  // este método trae los 10 registros mas recientes que haya en registro_diario
  getSomeRegistros() {
    return firstValueFrom(
      this.httpClient.get<Iregistro[]>("http://localhost:3000/api/diariofecha/paginado")
    )
  }

  // este método registra un día
  registerDay(day:any) {
    return firstValueFrom(
      this.httpClient.get<any>(`http://localhost:3000/api/diariofecha/eleccion/${day}`)
    )
  }


  // este método convierte una fecha formato String en un array con los 3 números de la fecha en formato Number
  deStringToNumber(fechaString:String) {
    let resultado = []
    let inicio = fechaString.split("-")
    
    for (let elemento of inicio) {
      resultado.push(Number(elemento))
    }

    return resultado
  }

  // este método calcula los días que tiene un mes
  calculaDiasMes(mesComprobar: any, anyo: any) {
    let meses31 = [1,3,5,7,8,10,12]
    let meses30 = [4,6,9,11]
    let meses28 = [2]

    for (let mes of meses31) {
        if (mes == mesComprobar) {
            return 31
        }
    }

    for (let mes of meses30) {
        if (mes == mesComprobar) {
            return 30
        }
    }
    
    if (anyo == 2024) {
        return 29
    }

    return 28
}

  // este método suma 1 día a la fecha
  sumaUnDia(arrFecha:any) {
    let nuevaFecha = []
    let diasMes = this.calculaDiasMes(arrFecha[1], arrFecha[0])
       
    if (arrFecha[2] < diasMes) {
        nuevaFecha[0] = arrFecha[0]
        nuevaFecha[1] = arrFecha[1]
        nuevaFecha[2] = arrFecha[2] + 1
        
    } else if ((arrFecha[2] == diasMes) && (arrFecha[1] < 12)) {
        nuevaFecha[0] = arrFecha[0]
        nuevaFecha[1] = arrFecha[1] + 1
        nuevaFecha[2] = 1
        
    } else {
        nuevaFecha[0] = arrFecha[0] + 1
        nuevaFecha[1] = 1
        nuevaFecha[2] = 1
        
    }

    return nuevaFecha
    
}

  // este método convierte una fecha en formato array de Number en una fecha en formato String
  deNumberToString(fechaNumber:any) {
    let resultado = []

    for (let elemento of fechaNumber) {
      if (elemento < 10) {        
        resultado.push("0" + elemento.toString())
      } else {
        resultado.push(elemento.toString())        
      }

    }

    const hola = resultado.join("-")

    return hola
  }

  // este método va llamando a la API para rellenar el registro desde la fecha que marques como inicio hasta la que pongas como final

  async fillDiario(inicio: string, miliseg:number) {
    // await this.registerDay(inicio);
    console.log("PETICIÓN 1");
    
    await this.sleep(15000);
    console.log("PETICIÓN 2");
    
  }

  // este método para la ejecución durante los segundos indicados para que la API no pete
  sleep(miliseg:number) {
    return new Promise(resolve => setTimeout(resolve, miliseg))
  }

  // este método hace una petición a la API cada 15 segundos

  async prueba(inicio:string, fin:string) {
    console.log("Inicio de la carga");
    let fechaComienzo = inicio
    console.log("fecha comienzo: ", fechaComienzo);
    const fechaActual = fin
    console.log(fechaActual);
    console.log(fechaComienzo.localeCompare(fechaActual));       

    while(fechaComienzo.localeCompare(fechaActual) != 0) {
      console.log("ENTRA EN EL BUCLE");
      
      await this.sleep(15000);
      let response = await this.registerDay(fechaComienzo); 

      const fechaNumber = this.deStringToNumber(fechaComienzo)
      const fechaMasUno = this.sumaUnDia(fechaNumber)       
      const fechaString = this.deNumberToString(fechaMasUno)
      fechaComienzo = fechaString
    }
    
    console.log("FIN DEL BUCLE");
    console.log("fecha final: ", fechaComienzo);    
    console.log("fin de la carga");    
    
  }


}
