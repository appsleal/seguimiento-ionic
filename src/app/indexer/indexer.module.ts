import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexerPageRoutingModule } from './indexer-routing.module';

import { IndexerPage } from './indexer.page';
import { CreateComponent } from './components/create/create.component';
import { ListAvailableComponent } from './components/list-available/list-available.component';
import { ListCompletedComponent } from './components/list-completed/list-completed.component';
import { ListRejectedComponent } from './components/list-rejected/list-rejected.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexerPageRoutingModule,
    NgxDatatableModule,
  ],
  declarations: [
    IndexerPage,
    CreateComponent,
    ListAvailableComponent,
    ListCompletedComponent,
    ListRejectedComponent,
  ],
})
export class IndexerPageModule {}
