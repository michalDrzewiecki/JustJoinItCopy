import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSliderModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule, 
  MatSidenavModule,
  MatListModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule
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
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
