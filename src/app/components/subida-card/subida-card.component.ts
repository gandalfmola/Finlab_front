import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subida-card',
  templateUrl: './subida-card.component.html',
  styleUrls: ['./subida-card.component.css']
})
export class SubidaCardComponent {

  @Input() subidaPintar!: any;

}
