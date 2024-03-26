import { Component, Input, inject } from '@angular/core';
import { IregistroCorto } from 'src/app/interfaces/registro-corto.interface';
import { Iregistro } from 'src/app/interfaces/registro.interface';
import { DiarioService } from 'src/app/services/diario.service';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent {

  @Input() arrRegistros!: any[];

  

}
