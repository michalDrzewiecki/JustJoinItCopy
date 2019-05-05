import { Component, OnInit} from '@angular/core';
import { NavigationService } from 'src/app/shared/services';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss'],
})
export class ThemeTogglerComponent implements OnInit{
  result: boolean = false;
  constructor(private navigationService: NavigationService) {
    
  }

  ngOnInit(){
    this.onTogglerChange();
  }
  
  onTogglerChange(){
      this.navigationService.changeTheme(this.result);
  }
}