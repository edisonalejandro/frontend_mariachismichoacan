import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'servicios',
    loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'paquetes',
    loadChildren: () => import('./pages/paquetes/paquetes.module').then(m => m.PaquetesModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then(m => m.GaleriaModule)
  },
  {
    path: 'repertorio',
    loadChildren: () => import('./pages/repertorio/repertorio.module').then(m => m.RepertorioModule)
  },
  {
    path: 'testimonios',
    loadChildren: () => import('./pages/testimonios/testimonios.module').then(m => m.TestimoniosModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then(m => m.ContactoModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
