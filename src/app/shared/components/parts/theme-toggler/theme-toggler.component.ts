import { Component, OnInit, ViewChild, Renderer, OnDestroy, ElementRef} from '@angular/core';
import { NavigationService } from 'src/app/shared/services';
import { Subscription } from 'rxjs';
import { MatIcon, MatSlideToggle } from '@angular/material';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss'],
})
export class ThemeTogglerComponent implements OnInit{
  result: boolean = false;
  constructor(private navigationService: NavigationService, private renderer: Renderer) {
    
  }

  ngOnInit(){
    this.onTogglerChange();
  }
  
  onTogglerChange(){
    this.navigationService.changeTheme(this.result);
  }
}