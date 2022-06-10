import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicSummaryComponent } from './components/graphic-summary/graphic-summary.component';

import { ListExpedientsComponent } from './components/list-expedients/list-expedients.component';

import { VisorPage } from './visor.page';

const routes: Routes = [
  {
    path: '',
    component: VisorPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list-expedients' },

      {
        path: 'list-expedients',
        component: ListExpedientsComponent,
      },
      {
        path: 'graphic-summary',
        component: GraphicSummaryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisorPageRoutingModule {}
