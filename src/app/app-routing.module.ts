import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AvantapresComponent } from './avantapres/avantapres.component';
import { ImagesComponent } from './images/images.component';
import { ServicesComponent } from './services/services.component';
import { DemandedevisComponent } from './demandedevis/demandedevis.component';
import { ContactComponent } from './contact/contact.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { FormulaireDevisComponent } from './formulaire-devis/formulaire-devis.component';


const routes: Routes = [
  {path: '',redirectTo:'accueil',pathMatch:"full"},
 
  {path: 'accueil' , component: HomeComponent },
  {path: 'Presentation' , component:  PresentationComponent },
  {path: 'Avantapres' , component:  AvantapresComponent },
  {path: 'Images' , component:  ImagesComponent },
  {path: 'Services' , component:  ServicesComponent  },
  {path: 'Demandedevis' , component:  DemandedevisComponent },
  {path: 'Contact' , component:  ContactComponent },
  {path: 'Realisations' , component:  RealisationsComponent },
  {path: 'FormulaireDevis' , component:  FormulaireDevisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
