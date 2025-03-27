import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { CollegeComponent } from './college/college.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UdemyComponent } from './udemy/udemy.component';
import { AddComponent } from './udemy/add/add.component';
import { BuyComponent } from './udemy/buy/buy.component';
import { PurchasedComponent } from './udemy/purchased/purchased.component';
import { UdemyProfileComponent } from './udemy/udemy-profile/udemy-profile.component';
import { roleGuard } from './role.guard';
import { formStatusGuard } from './form-status.guard';
import { ageGuard } from './age.guard';
import { StudentComponent } from './college/student/student.component';
import { ProfessorComponent } from './college/professor/professor.component';
import { AccountTypeComponent } from './admin/account-type/account-type.component';
import { CategoryComponent } from './admin/category/category.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'men',
    loadChildren: () => import('./men/men.module').then((m) => m.MenModule),
  },
  {
    path: 'women',
    loadChildren: () =>
      import('./women/women.module').then((m) => m.WomenModule),
  },
  {
    path: 'kids',
    loadChildren: () => import('./kids/kids.module').then((m) => m.KidsModule),
  },
  {
    path: 'university',
    loadChildren: () =>
      import('./university/university.module').then((m) => m.UniversityModule),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./games/games.module').then((m) => m.GamesModule),
    // canMatch: [ageGuard],
    //canActivate: [roleGuard],
  },
  {
    path: 'college',
    component: CollegeComponent,
    children: [
      { path: 'student', component: StudentComponent },
      { path: 'professor', component: ProfessorComponent },
    ],
  },
  {
    path: 'signup',
    component: SignUpComponent,
    canDeactivate: [formStatusGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserComponent, canActivate: [roleGuard] },
  {
    path: 'udemy',
    component: UdemyComponent,
    children: [
      { path: 'add', component: AddComponent },
      { path: 'buy', component: BuyComponent },
      { path: 'purchase', component: PurchasedComponent },
      { path: 'update', component: UdemyProfileComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'account', component: AccountTypeComponent },
      { path: 'category', component: CategoryComponent },
    ],
    canActivate: [roleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
