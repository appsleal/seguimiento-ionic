import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatorPageRoutingModule } from './creator-routing.module';

import { CreatorPage } from './creator.page';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatorPageRoutingModule,
    NgxDatatableModule,
  ],
  declarations: [CreatorPage, CreateComponent, ListComponent],
})
export class CreatorPageModule {}
