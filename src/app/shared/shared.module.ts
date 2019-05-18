import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponents } from './components';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationServices } from './services';
import { HttpClientService } from './http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    BrowserModule,
  ],
  exports: [
    ...SharedComponents
  ],
  declarations: [
    ...SharedComponents
  ],
  providers: [
    ...NavigationServices,
    CookieService,
    HttpClientService
  ]
})
export class SharedModule { }
