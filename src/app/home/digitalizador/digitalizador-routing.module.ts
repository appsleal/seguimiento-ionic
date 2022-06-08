import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalizadorPage } from './digitalizador.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalizadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalizadorPageRoutingModule {}
