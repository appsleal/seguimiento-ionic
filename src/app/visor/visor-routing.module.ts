import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDocumentsComponent } from './components/list-documents/list-documents.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

import { VisorPage } from './visor.page';

const routes: Routes = [
  {
    path: '',
    component: VisorPage,
    children: [
      {
        path: 'list-documents',
        component: ListDocumentsComponent,
      },
      {
        path: 'pie-chart',
        component: PieChartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisorPageRoutingModule {}
