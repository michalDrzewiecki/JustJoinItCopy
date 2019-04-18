import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit{
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() sidenavForSMToggle = new EventEmitter<void>();
  appRouterUrls;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(){
    this.appRouterUrls = this.navigationService.getAppRouterUrls();
  }
  onToggleSidenav(){
    this.navigationService.unsetSMDevice();
    this.sidenavToggle.emit();
  }

  onToggleSidenavForSM(){
    this.navigationService.setSMDevice();
    this.sidenavForSMToggle.emit();
  }
}
