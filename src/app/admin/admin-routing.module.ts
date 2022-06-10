import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
import { MunicipiosComponent } from './components/municipios/municipios.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'municipios' },
      {
        path: 'municipios',
        component: MunicipiosComponent,
      },
      {
        path: 'usuarios',
        component: UserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
