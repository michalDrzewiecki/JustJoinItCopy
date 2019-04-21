import { NgModule } from '@angular/core';
import { OffersComponents } from './components';
import { MaterialModule } from '../../material/material.module';
import { OffersServices } from './services';
import { AppRoutingModule } from '../../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    LeafletModule.forRoot()
  ],
  declarations: [
    ...OffersComponents
  ],
  providers: [
    ...OffersServices
  ]
})
export class OffersModule { }