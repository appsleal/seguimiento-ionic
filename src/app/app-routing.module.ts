import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  },  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'visor',
    loadChildren: () => import('./visor/visor.module').then( m => m.VisorPageModule)
  },
  {
    path: 'indexer',
    loadChildren: () => import('./indexer/indexer.module').then( m => m.IndexerPageModule)
  },
  {
    path: 'auditor',
    loadChildren: () => import('./auditor/auditor.module').then( m => m.AuditorPageModule)
  },
  {
    path: 'creator',
    loadChildren: () => import('./creator/creator.module').then( m => m.CreatorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
