import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/addClient/add-client.component';
import { EditClientComponent } from './components/editClient/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from "@angular/router";
import { ClientService } from "./services/client.service";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from './guards/auth.guard';
import {Settings} from "./models/settings";
import {SettingsService} from "./services/settings.service";
import {RegisterGuard} from "./guards/register.guard";

const appRoutes: Routes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate:[RegisterGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'add-client', component: AddClientComponent, canActivate:[AuthGuard]},
  {path: 'client/:id', component: ClientDetailsComponent, canActivate:[AuthGuard]},
  {path: 'edit-client/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  {path: '**', component: PageNotFoundComponent},
];

export const firebaseConfig = {
  apiKey: "AIzaSyD9ZiW_AOO285ClG4dBosKan8S5ivQm6A0",
  authDomain: "angular-5-client-panel.firebaseapp.com",
  databaseURL: "https://angular-5-client-panel.firebaseio.com",
  storageBucket: "angular-5-client-panel.appspot.com",
  messagingSenderId: "599744583534"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
