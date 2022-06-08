import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalizadorPageRoutingModule } from './digitalizador-routing.module';

import { DigitalizadorPage } from './digitalizador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalizadorPageRoutingModule
  ],
  declarations: [DigitalizadorPage]
})
export class DigitalizadorPageModule {}
