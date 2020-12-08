import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data = [];

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: [71, 78, 39, 66]
      }]
    };
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
