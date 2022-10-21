import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // constructor() { }

  // ngOnInit(): void {
  // }
  @Input('valor') public progreso: number = 40;
  @Input() public btnClass: string = 'btn-warning'
  //@Input() public progreso: number = 40;
  // get getPorcentaje() {
  //   return `${this.progreso}%`;
  // }

  @Output('valor') public valorSalida:EventEmitter<number>=new EventEmitter();

  cambiarValor(valor:number){

    if (this.progreso >= 100 && valor >=0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;

    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
      return;

    }


    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange( nuevoValor: number ){
    if( nuevoValor >= 100 ){
      this.progreso = 100;
    }else if (nuevoValor <= 0){
      this.progreso = 0;
    }else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso)
  }

}
