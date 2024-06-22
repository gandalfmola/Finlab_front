import { Component, Input } from '@angular/core';
import { Isubida } from 'src/app/interfaces/subida-interface';

@Component({
  selector: 'app-subida-list',
  templateUrl: './subida-list.component.html',
  styleUrls: ['./subida-list.component.css']
})
export class SubidaListComponent {

  @Input() arrSubidasPintar!: any[];

  ngOnInit() {
    console.log("arrSubidasPintar en subida_list", this.arrSubidasPintar);
    
  }

}
