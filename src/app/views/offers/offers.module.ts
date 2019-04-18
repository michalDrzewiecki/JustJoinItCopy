import { NgModule } from '@angular/core';
import { OffersComponents } from './components';
import { MaterialModule } from '../../material/material.module';
import { OffersServices } from './services';
import { AppRoutingModule } from '../../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';


// in this module we import every angular material module
@NgModule({
  imports: [
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    ...OffersComponents
  ],
  providers: [
    ...OffersServices
  ]
})
export class OffersModule { }