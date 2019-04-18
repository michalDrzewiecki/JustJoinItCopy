import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent implements OnInit{
  @Output() sidenavClose = new EventEmitter<void>();
  @Output() sidenavForSMClose = new EventEmitter<void>();
  appRouterUrls;
  
  constructor(private navigationService: NavigationService) {}

  ngOnInit(){
    this.appRouterUrls = this.navigationService.getAppRouterUrls();
  }
  onSidenavClose(){
    this.sidenavClose.emit();
    this.sidenavForSMClose.emit();
  }
  isSMDevice():boolean{
    return this.navigationService.getSMDevice();
  }

}