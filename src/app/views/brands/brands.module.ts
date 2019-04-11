import { NgModule } from '@angular/core';
import { BrandsComponents } from './components';
import { MaterialModule } from '../../material/material.module';


// in this module we import every angular material module
@NgModule({
  imports: [
    MaterialModule
  ],
  declarations: [
    ...BrandsComponents
  ],
  exports: [
    ...BrandsComponents
  ],
  providers: [
  ]
})
export class BrandsModule { }