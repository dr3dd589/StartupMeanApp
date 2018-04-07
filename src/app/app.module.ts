import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {AuthGuard} from './guard/auth.guard';
import { StartupsComponent } from './components/startups/startups.component';
import { StartupapplicationComponent } from './components/startupapplication/startupapplication.component';
const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent,  canActivate:[AuthGuard]},
  {path:'startups', component: StartupsComponent},
  {path:'startupapplication', component: StartupapplicationComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    DashboardComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    StartupsComponent,
    StartupapplicationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
