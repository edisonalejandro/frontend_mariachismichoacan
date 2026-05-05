import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RepertorioComponent } from './pages/repertorio/repertorio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'repertorio', component: RepertorioComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
