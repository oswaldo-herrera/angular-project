import { Component, Input, OnInit } from '@angular/core';


//import {MultiDataSet, Label} from 'ng2-charts';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.scss']
})
export class Grafica1Component  {

  public labels1: string[] = [ 'Pan', 'Refresco', 'Tacos' ];

  public data1 =  [
      [ 10, 15, 40 ]
    ];
  };




//   constructor() { }

//   ngOnInit(): void {
//   }

// }
