import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

public progreso1:number = 25;
public progreso2:number =35;

getProgreso1(){
  return `${this.progreso1}%`;

}

getProgreso2(){
  return `${this.progreso2}%`;
}

cambioValorHijo(valor:number){
this.progreso1 = valor;
}

}
