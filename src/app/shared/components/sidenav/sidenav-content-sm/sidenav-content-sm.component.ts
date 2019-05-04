import { Component, Output, EventEmitter } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';


@Component({
  selector: 'app-sidenav-content-sm',
  templateUrl: './sidenav-content-sm.component.html',
  styleUrls: ['./sidenav-content-sm.component.scss'],
})
export class SidenavContentSmComponent {
  @Output() close = new EventEmitter<void>();
  appRouterUrls;
  
  constructor(private navigationService: NavigationService) {}

  ngOnInit(){
    this.appRouterUrls = this.navigationService.getAppRouterUrls();
  }

  onSidenavClose(): void{
    this.close.emit();
  }
}
