import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType , Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent implements OnInit {
  @Input() public title:string = 'Sin Titulo';


  @Input('labels') public doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets:  [
      { data: [ 350, 450, 100 ] }
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ]
  };

  // public colors: Color[] = [

  //  ];

  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }


}
