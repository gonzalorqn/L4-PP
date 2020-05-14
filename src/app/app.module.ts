import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AfricaComponent } from './pages/africa/africa.component';
import { AmericasComponent } from './pages/americas/americas.component';
import { AsiaComponent } from './pages/asia/asia.component';
import { EuropeComponent } from './pages/europe/europe.component';
import { OceaniaComponent } from './pages/oceania/oceania.component';
import { ErrorComponent } from './pages/error/error.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CountryComponent } from './pages/country/country.component';

import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    AfricaComponent,
    AmericasComponent,
    AsiaComponent,
    EuropeComponent,
    OceaniaComponent,
    ErrorComponent,
    SignupComponent,
    AboutComponent,
    FavoritesComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    TabMenuModule,
    MenubarModule,
    ButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    PasswordModule,
    DialogModule,
    CardModule,
    DataViewModule,
    PanelModule,
    DropdownModule
  ],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
