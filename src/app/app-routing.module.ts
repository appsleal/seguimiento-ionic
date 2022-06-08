import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'visor',
    loadChildren: () =>
      import('./visor/visor.module').then((m) => m.VisorPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'indexer',
    loadChildren: () =>
      import('./indexer/indexer.module').then((m) => m.IndexerPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auditor',
    loadChildren: () =>
      import('./auditor/auditor.module').then((m) => m.AuditorPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'creator',
    loadChildren: () =>
      import('./creator/creator.module').then((m) => m.CreatorPageModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
