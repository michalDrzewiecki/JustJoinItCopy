import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit{
  @Output() sidenavClose = new EventEmitter<void>();
  //@Output() sidenavForSMClose = new EventEmitter<void>();
  appRouterUrls;
  
  constructor(private navigationService: NavigationService) {}

  ngOnInit(){
    this.appRouterUrls = this.navigationService.getAppRouterUrls();
  }
  onSidenavClose(){
    this.sidenavClose.emit();
    //this.sidenavForSMClose.emit();
  }
  /*isSMDevice():boolean{
    return this.navigationService.getSMDevice();
  }*/

}