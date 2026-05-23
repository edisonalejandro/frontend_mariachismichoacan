import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepertorioComponent } from './repertorio.component';

@NgModule({
  declarations: [RepertorioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RepertorioComponent }])
  ]
})
export class RepertorioModule {}
