import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestimoniosComponent } from './testimonios.component';

@NgModule({
  declarations: [TestimoniosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TestimoniosComponent }])
  ]
})
export class TestimoniosModule {}
