import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuditorPageRoutingModule } from './auditor-routing.module';

import { AuditorPage } from './auditor.page';
import { ListToValidateComponent } from './components/list-to-validate/list-to-validate.component';
import { ListValidatedComponent } from './components/list-validated/list-validated.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuditorPageRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
  ],
  declarations: [AuditorPage, ListToValidateComponent, ListValidatedComponent],
})
export class AuditorPageModule {}
