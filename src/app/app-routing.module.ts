import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'men', loadChildren: () => import('./men/men.module').then(m =>m.MenModule)},
  {path: 'women', loadChildren: () => import('./women/women.module').then(m => m.WomenModule)},
  {path: 'kids', loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule)},
  {path: 'university', loadChildren: () => import('./university/university.module').then(m => m.UniversityModule)},
  {path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
