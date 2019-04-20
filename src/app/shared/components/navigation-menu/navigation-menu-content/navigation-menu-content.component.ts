import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NavigationService } from '../../../services';

@Component({
  selector: 'app-navigation-menu-content',
  templateUrl: './navigation-menu-content.component.html',
  styleUrls: ['./navigation-menu-content.component.scss'],
})
export class NavigationMenuContentComponent implements OnInit{
  @Output() toggle = new EventEmitter<void>();
  appRouterUrls;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(){
    this.appRouterUrls = this.navigationService.getAppRouterUrls();
  }

  onToggleSidenav(){
    this.toggle.emit();
  }
}
