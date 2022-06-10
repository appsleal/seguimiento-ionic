import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';

import { CreatorPage } from './creator.page';

const routes: Routes = [
  {
    path: '',
    component: CreatorPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'create' },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorPageRoutingModule {}
