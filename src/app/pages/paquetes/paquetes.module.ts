import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaquetesComponent } from './paquetes.component';

@NgModule({
  declarations: [PaquetesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PaquetesComponent }])
  ]
})
export class PaquetesModule {}
