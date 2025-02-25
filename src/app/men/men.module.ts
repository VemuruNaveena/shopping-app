import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenRoutingModule } from './men-routing.module';
import { MenComponent } from './men.component';


@NgModule({
  declarations: [
    MenComponent
  ],
  imports: [
    CommonModule,
    MenRoutingModule
  ]
})
export class MenModule { }
