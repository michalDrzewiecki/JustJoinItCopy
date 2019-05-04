import { NgModule } from '@angular/core';
import { AuthComponents } from './components';
import { MaterialModule } from '../../material/material.module';
import { AuthServices } from './services';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';


// in this module we import every angular material module
@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    ...AuthComponents
  ],
  providers: [
    ...AuthServices
  ]
})
export class AuthModule { }
