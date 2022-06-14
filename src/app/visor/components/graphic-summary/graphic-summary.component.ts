/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { VisorService } from 'src/app/services/visor.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ListaMunicipios } from 'src/app/interfaces/lista-municipios';
import { AdminService } from 'src/app/services/admin.service';

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
  cupos = 0;
  municipios: any;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,

    indexAxis: 'y',
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      datalabels: {
        anchor: 'center',
        align: 'end',
        color: '#C6ADAD',
        font: {
          size: 50,
        },
        formatter: (value, categories) => {
          let sum = 0;
          const dataArr = categories.chart.data.datasets[3].data;
          dataArr.map((data) => {
            if (typeof data === 'number') {
              sum += data;
            }
          });
          const percentage = ((value * 100) / sum).toFixed(1) + '%';
          return percentage + ' - ' + value;
        },
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['Resumen'],
    datasets: [
      { data: [this.entregados], label: 'Entregados' },
      {
        data: [this.digitalizado],
        label: 'Digitalizados',
        backgroundColor: 'grey',
      },
      { data: [this.validado], label: 'Validados', backgroundColor: '#0B0B45' },
      {
        data: [this.cupos],
        label: 'Cupos',
        backgroundColor: 'green',
      },
    ],
  };
  constructor(
    private visorService: VisorService,
    private adminService: AdminService
  ) {
    this.adminService.getMunicipios().subscribe((data: ListaMunicipios) => {
      this.municipios = [...data.municipio];
      this.municipios.push({
        ID: 0,
        NOMBRE: 'Todos',
        CUPO: 0,
      });
      console.log({
        municipios: this.municipios,
      });
    });
  }

  municipiosClicked(id: number) {
    console.log({ municipioClicked: id });
  }

  allMunicipiosClicked() {
    console.log({
      allMunicipios: this.municipios,
    });
  }

  ngOnInit() {
    this.loadBarChart();
  }

  loadBarChart(id = 0) {
    this.visorService.getCount(id).subscribe((res) => {
      this.barChartData.datasets[0].data = [res['entregados']];
      this.barChartData.datasets[1].data = [res['digitalizado']];
      this.barChartData.datasets[2].data = [res['validado']];
      this.barChartData.datasets[3].data = [res['cupo']];

      this.chart?.update();
    });
  }
}
