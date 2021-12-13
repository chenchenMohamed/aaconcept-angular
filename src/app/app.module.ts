import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AbouteHomeComponent } from './home/components/aboute-home/aboute-home.component';
import { Blog1HomeComponent } from './home/components/blog1-home/blog1-home.component';
import { Blog2HomeComponent } from './home/components/blog2-home/blog2-home.component';
import { Blog3HomeComponent } from './home/components/blog3-home/blog3-home.component';
import { Blog4HomeComponent } from './home/components/blog4-home/blog4-home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AvantapresComponent } from './avantapres/avantapres.component';
import { ImagesComponent } from './images/images.component';
import { ServicesComponent } from './services/services.component';
import { DemandedevisComponent } from './demandedevis/demandedevis.component';
import { ContactComponent } from './contact/contact.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { PartenaireComponent } from './home/components/partenaire/partenaire.component';
import { SliderpageComponent } from './components/sliderpage/sliderpage.component';
import { EnduitdecoratifComponent } from './services/enduitdecoratif/enduitdecoratif.component';
import { NettoyagetoitureComponent } from './services/nettoyagetoiture/nettoyagetoiture.component';
import { RenovationfacadeComponent } from './services/renovationfacade/renovationfacade.component';
import { RenovationinterieurComponent } from './services/renovationinterieur/renovationinterieur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    AbouteHomeComponent,
    Blog1HomeComponent,
    Blog2HomeComponent,
    Blog3HomeComponent,
    Blog4HomeComponent,
    PresentationComponent,
    AvantapresComponent,
    ImagesComponent,
    ServicesComponent,
    DemandedevisComponent,
    ContactComponent,
    RealisationsComponent,
    PartenaireComponent,
    SliderpageComponent,
    EnduitdecoratifComponent,
    NettoyagetoitureComponent,
    RenovationfacadeComponent,
    RenovationinterieurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
