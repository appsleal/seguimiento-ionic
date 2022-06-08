import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisorPageRoutingModule } from './visor-routing.module';

import { VisorPage } from './visor.page';
import { ListDocumentsComponent } from './components/list-documents/list-documents.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, VisorPageRoutingModule],
  declarations: [VisorPage, ListDocumentsComponent, PieChartComponent],
})
export class VisorPageModule {}
