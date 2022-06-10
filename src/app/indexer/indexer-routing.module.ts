import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListAvailableComponent } from './components/list-available/list-available.component';
import { ListCompletedComponent } from './components/list-completed/list-completed.component';
import { ListRejectedComponent } from './components/list-rejected/list-rejected.component';

import { IndexerPage } from './indexer.page';

const routes: Routes = [
  {
    path: '',
    component: IndexerPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'create' },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'list-available',
        component: ListAvailableComponent,
      },
      {
        path: 'list-completed',
        component: ListCompletedComponent,
      },
      {
        path: 'list-rejected',
        component: ListRejectedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexerPageRoutingModule {}
