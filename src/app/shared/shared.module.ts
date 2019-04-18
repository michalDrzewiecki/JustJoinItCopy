import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponents } from './components';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationServices } from './services';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ...SharedComponents
  ],
  declarations: [
    ...SharedComponents
  ],
  providers: [
    ...NavigationServices
  ]
})
export class SharedModule { }
