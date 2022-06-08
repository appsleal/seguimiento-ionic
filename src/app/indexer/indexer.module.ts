import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexerPageRoutingModule } from './indexer-routing.module';

import { IndexerPage } from './indexer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexerPageRoutingModule
  ],
  declarations: [IndexerPage]
})
export class IndexerPageModule {}
