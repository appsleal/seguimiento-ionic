import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorGuard } from '../guards/creator.guard';
import { CreateComponent } from './components/create/create.component';
import { CreeateFormComponent } from './components/creeate-form/creeate-form.component';
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
        canActivate:[CreatorGuard]

      },
      {
        path: 'create-form',
        component: CreeateFormComponent,
        canActivate:[CreatorGuard]

      },
      {
        path: 'list',
        component: ListComponent,
        canActivate:[CreatorGuard]

      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorPageRoutingModule {}
