import { Component, EventEmitter, Output, Input, OnInit, OnDestroy } from '@angular/core';
import { NavigationService, HttpClientService } from 'src/app/shared/services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit{
  @Output() sidenavClose = new EventEmitter<void>();
  appRouterUrls;
  
  constructor(private navigationService: NavigationService, 
                private router: Router, 
                private httpClientService: HttpClientService) {}

  ngOnInit(){
    this.appRouterUrls = this.navigationService.getAppRouterUrls();
  }

  onAuthClick(route: string): void{
    this.onSidenavClose();
    this.router.navigate([route]);
  }

  onSidenavClose(){
    this.sidenavClose.emit();
  }

  onLogoutClick(){
    this.sidenavClose.emit();
    this.httpClientService.logout();
  }
}