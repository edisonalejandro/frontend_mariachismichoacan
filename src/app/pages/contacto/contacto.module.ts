import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto.component';

@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ContactoComponent }])
  ]
})
export class ContactoModule {}
