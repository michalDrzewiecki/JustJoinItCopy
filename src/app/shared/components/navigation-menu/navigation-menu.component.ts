import { Component, Output, EventEmitter, OnInit, ViewChild, ElementRef, Renderer, OnDestroy} from '@angular/core';
import { NavigationService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit, OnDestroy{
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() sidenavToggleForSM = new EventEmitter<void>();
  @ViewChild('theme') container: ElementRef;  
  appRouterUrls;
  themeSubscription: Subscription;

  constructor(private navigationService: NavigationService, private renderer: Renderer) {}

  ngOnInit(){
    this.themeSubscription = this.navigationService.result.subscribe((value: {actual: string, last: string})=>{
      this.renderer.setElementClass(this.container.nativeElement, value.actual, true);
      this.renderer.setElementClass(this.container.nativeElement, value.last, false);
    });
  }
  ngOnDestroy(){
    this.themeSubscription.unsubscribe;
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
  onToggleSidenavForSM(){
    this.sidenavToggleForSM.emit();
  }
}
