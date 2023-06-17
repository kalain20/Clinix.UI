import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './header/header.component';
import { CustomComponent } from './custom/custom.component';
import { MenuComponent } from './menu/menu.component';
import { SlideComponent } from './slide/slide.component';
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FootHeaderComponent } from './foot-header/foot-header.component';
import { HttpClientModule } from '@angular/common/http';
import { MedecinComponent } from './medecin/medecin.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { SoignantComponent } from './soignant/soignant.component';




@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HeaderComponent,
    CustomComponent,
    MenuComponent,
    SlideComponent,
    OffersComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    FootHeaderComponent,
    MedecinComponent,
    InfirmierComponent,
    SoignantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
