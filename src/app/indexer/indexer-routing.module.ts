import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexerPage } from './indexer.page';

const routes: Routes = [
  {
    path: '',
    component: IndexerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexerPageRoutingModule {}
