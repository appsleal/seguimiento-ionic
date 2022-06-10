import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditorPage } from './auditor.page';
import { ListToValidateComponent } from './components/list-to-validate/list-to-validate.component';
import { ListValidatedComponent } from './components/list-validated/list-validated.component';

const routes: Routes = [
  {
    path: '',
    component: AuditorPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list-to-validate' },
      {
        path: 'list-validated',
        component: ListValidatedComponent,
      },
      {
        path: 'list-to-validate',
        component: ListToValidateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditorPageRoutingModule {}
