import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
import { MunicipiosComponent } from './components/municipios/municipios.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
  },
  {
    path: 'municipios',
    component: MunicipiosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
