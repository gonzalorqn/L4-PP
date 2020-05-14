import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AfricaComponent } from './pages/africa/africa.component';
import { AmericasComponent } from './pages/americas/americas.component';
import { AsiaComponent } from './pages/asia/asia.component';
import { EuropeComponent } from './pages/europe/europe.component';
import { OceaniaComponent } from './pages/oceania/oceania.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { CountryComponent } from './pages/country/country.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'login', component: LoginComponent, canActivate: [AuthLoginGuard]
  },
  {
    path: 'signup', component: SignupComponent, canActivate: [AuthLoginGuard]
  },
  {
    path: 'africa', component: AfricaComponent, canActivate: [AuthGuard]
  },
  {
    path: 'americas', component: AmericasComponent, canActivate: [AuthGuard]
  },
  {
    path: 'asia', component: AsiaComponent, canActivate: [AuthGuard]
  },
  {
    path: 'europe', component: EuropeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'oceania', component: OceaniaComponent, canActivate: [AuthGuard]
  },
  {
    path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'country/:code', component: CountryComponent, canActivate: [AuthGuard]
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
