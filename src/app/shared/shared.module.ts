import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponents } from './components';
import { MaterialModule } from '../material/material.module'

@NgModule({
  imports: [
    RouterModule,
    MaterialModule
  ],
  exports: [
    ...SharedComponents
  ],
  declarations: [
    ...SharedComponents
  ],
  providers: [

  ]
})
export class SharedModule { }
