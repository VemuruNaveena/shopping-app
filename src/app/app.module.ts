import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { UniversityComponent } from './university/university.component';
import { HeaderComponent } from './header/header.component';
import { CollegeComponent } from './college/college.component';
import { CollegeTableComponent } from './college-table/college-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UdemyComponent } from './udemy/udemy.component';
import { appInterceptor } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CollegeComponent,
    CollegeTableComponent,
    SignUpComponent,
    LoginComponent,
    UserComponent,
    UdemyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideHttpClient(withInterceptors([appInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
