import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatorPageRoutingModule } from './creator-routing.module';

import { CreatorPage } from './creator.page';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CreeateFormComponent } from './components/creeate-form/creeate-form.component';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { InputMayusDirective } from '../directives/input-mayus.directive';
import { CsvModule } from '@ctrl/ngx-csv';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatorPageRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CsvModule
  ],
  declarations: [CreatorPage, CreateComponent, ListComponent,CreeateFormComponent,InputMayusDirective],
})
export class CreatorPageModule {}
