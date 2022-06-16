import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';

import { AdminPage } from './admin.page';
import { ChipsComponent } from './components/chips/chips.component';
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
        canActivate: [AdminGuard],
      },
      {
        path: 'usuarios',
        component: UserComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'chips',
        component: ChipsComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
