/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { VisorService } from 'src/app/services/visor.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-graphic-summary',
  templateUrl: './graphic-summary.component.html',
  styleUrls: ['./graphic-summary.component.scss'],
})
export class GraphicSummaryComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  entregados = 0;
  digitalizado = 0;
  validado = 0;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 1,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['Resumen'],
    datasets: [
      { data: [this.entregados], label: 'Entregados' },
      { data: [this.digitalizado], label: 'Digitalizados' },
      { data: [this.validado], label: 'Validados' },
    ],
  };
  constructor(private service: VisorService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.service.getCount().subscribe((res) => {
      this.barChartData.datasets[0].data = [res['entregados']];
      this.barChartData.datasets[1].data = [res['digitalizado']];
      this.barChartData.datasets[2].data = [res['validado']];
      this.chart?.update();
    });
  }
}
