import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { DiaMamaFloatComponent } from './components/dia-mama-float/dia-mama-float.component';
import { YoutubeEmbedPipe } from './pipes/youtube-embed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
