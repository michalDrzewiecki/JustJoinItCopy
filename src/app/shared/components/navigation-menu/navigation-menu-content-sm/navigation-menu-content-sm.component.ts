import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navigation-menu-content-sm',
  templateUrl: './navigation-menu-content-sm.component.html',
  styleUrls: ['./navigation-menu-content-sm.component.scss'],
})
export class NavigationMenuContentSmComponent{
  @Output() toggle = new EventEmitter<void>(); 

  constructor() {}

  onToggleSidenav(){
    this.toggle.emit();
  }
}
