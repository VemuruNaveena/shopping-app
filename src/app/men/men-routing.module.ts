import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { AccessoriesComponent } from './accessories/accessories.component';

const routes: Routes = [
  {
    path: '',
    component: MenComponent,
    children: [
      { path: '', redirectTo: 'tops', pathMatch: 'full' },
      { path: 'tops', component: TopsComponent },
      { path: 'bottoms', component: BottomsComponent },
      { path: 'accessories', component: AccessoriesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenRoutingModule {}
