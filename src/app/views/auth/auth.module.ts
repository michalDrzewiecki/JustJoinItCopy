import { NgModule } from '@angular/core';
import { AuthComponents } from './components';
import { MaterialModule } from '../../material/material.module';
import { AuthServices } from './services';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// in this module we import every angular material module
@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...AuthComponents
  ],
  providers: [
    ...AuthServices
  ]
})
export class AuthModule { }
