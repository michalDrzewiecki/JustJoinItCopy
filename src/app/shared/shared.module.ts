import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponents } from './components';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationServices } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    BrowserModule
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
