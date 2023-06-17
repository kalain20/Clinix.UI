import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MedecinComponent } from './medecin/medecin.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { SoignantComponent } from './soignant/soignant.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "home", component : HomeComponent},
  {path : "medecin", component : MedecinComponent},
  {path : "infirmier", component: InfirmierComponent},
  {path : "soignant", component: SoignantComponent},
  {path : "", component : HomeComponent},
  {path : "**", component : HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
