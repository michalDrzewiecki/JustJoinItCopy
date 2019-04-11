import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSliderModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule, 
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// in this module we import every angular material module
@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class MaterialModule { }
