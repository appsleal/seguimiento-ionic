import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { MunicipiosComponent } from './components/municipios/municipios.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserComponent } from './components/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminPage, MunicipiosComponent, UserComponent],
})
export class AdminPageModule {}
