import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria.component';

@NgModule({
  declarations: [GaleriaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: GaleriaComponent }])
  ]
})
export class GaleriaModule {}
