import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenRoutingModule } from './men-routing.module';
import { MenComponent } from './men.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { AccessoriesComponent } from './accessories/accessories.component';


@NgModule({
  declarations: [
    MenComponent,
    TopsComponent,
    BottomsComponent,
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    MenRoutingModule
  ]
})
export class MenModule { }
