import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

//Modulos externos
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',

})
export class DonaComponent {

  @Input() title:string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: Label[] = ['label 1', 'label 2', 'label 3'];
  @Input('data') doughnutChartData: MultiDataSet = [ [100, 200, 700] ];
  

  //public doughnutChartLabels: Label[] = ['Ventas de descarga', 'Ventas en la tienda', 'Ventas por correo'];
  //public doughnutChartData: MultiDataSet = [ [350, 450, 100] ];
  
  public doughnut: ChartType = 'doughnut'; 

  public colors: Color[] = [
    { backgroundColor: ['#6857E6','#009FEE','#F02059'] }
  ];
  
}
