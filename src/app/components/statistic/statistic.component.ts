import { Component } from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
  ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];

  ngOnInit(){

    this.chartData.push(1);
    this.chartData.push(2);
    this.chartData.push(3);

    this.chartDatalabels.push('A');
    this.chartDatalabels.push('B');
    this.chartDatalabels.push('C');

    this.ctx = document.getElementById('myChart');
    this.config = {
      type : 'pie',
      options : {
      },
      data : {
        labels : this.chartDatalabels,
        datasets : [{
          label: 'Chart Data',
          data: this.chartData,
          borderWidth: 5,
          borderColor: 'grey',
          backgroundColor: ['pink', 'yellow','red']
        }],
      }
    }
    const myChart = new Chart(this.ctx, this.config);
  }
}


