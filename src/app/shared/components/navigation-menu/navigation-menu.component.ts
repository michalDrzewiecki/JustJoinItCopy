import { Component, Output, EventEmitter} from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent{
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() sidenavToggleForSM = new EventEmitter<void>();
  appRouterUrls;

  constructor(private navigationService: NavigationService) {}

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
  onToggleSidenavForSM(){
    this.sidenavToggleForSM.emit();
  }
}
