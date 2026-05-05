import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RepertorioComponent } from './pages/repertorio/repertorio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { DiaMamaFloatComponent } from './components/dia-mama-float/dia-mama-float.component';
import { YoutubeEmbedPipe } from './pipes/youtube-embed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    PaquetesComponent,
    GaleriaComponent,
    TestimoniosComponent,
    ContactoComponent,
    RepertorioComponent,
    NavbarComponent,
    FooterComponent,
    WhatsappButtonComponent,
    DiaMamaFloatComponent,
    YoutubeEmbedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
