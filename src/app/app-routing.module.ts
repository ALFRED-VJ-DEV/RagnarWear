import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/Home/home/home.component';
import { CombinarComponent } from './pages/combinar/combinar.component';
import { StorePlayerasComponent } from './pages/store-playeras/store-playeras.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'personalizar', component: CombinarComponent},
  {path: 'almacen', component: StorePlayerasComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
