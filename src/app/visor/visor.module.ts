import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisorPageRoutingModule } from './visor-routing.module';
import { NgChartsModule } from 'ng2-charts';

import { VisorPage } from './visor.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GraphicSummaryComponent } from './components/graphic-summary/graphic-summary.component';
import { ListExpedientsComponent } from './components/list-expedients/list-expedients.component';
import { CsvModule } from '@ctrl/ngx-csv';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisorPageRoutingModule,
    NgChartsModule,
    NgxDatatableModule,
    CsvModule,
  ],
  declarations: [VisorPage, ListExpedientsComponent, GraphicSummaryComponent],
})
export class VisorPageModule {}
