import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyDetailComponent } from './property-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PropertyDetailComponent],
  exports: [PropertyDetailComponent]
})
export class PropertyDetailModule { }
