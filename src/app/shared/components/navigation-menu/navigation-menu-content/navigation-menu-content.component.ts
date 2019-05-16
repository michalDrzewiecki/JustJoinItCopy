import { Component, Output, EventEmitter, OnInit, Renderer, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NavigationService, HttpClientService } from '../../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-menu-content',
  templateUrl: './navigation-menu-content.component.html',
  styleUrls: ['./navigation-menu-content.component.scss'],
})
export class NavigationMenuContentComponent implements OnInit, OnDestroy{
  @Output() toggle = new EventEmitter<void>();
  appRouterUrls;
  themeSubscription: Subscription;
  @ViewChild('themeFirst') first: ElementRef; 
  @ViewChild('themeSecond') second: ElementRef; 
  

  constructor(private navigationService: NavigationService, 
                private renderer: Renderer,
                private httpClientService: HttpClientService) {}

  ngOnInit(){
    this.appRouterUrls = this.navigationService.getAppRouterUrls();
    this.themeSubscription = this.navigationService.result.subscribe((value: {actual: string, last: string})=>{
      this.renderer.setElementClass(this.first.nativeElement, value.actual, true);
      this.renderer.setElementClass(this.first.nativeElement,value.last, false);
      this.renderer.setElementClass(this.second.nativeElement, value.actual, true);
      this.renderer.setElementClass(this.second.nativeElement,value.last, false);
    });
  }

  ngOnDestroy(){
    this.themeSubscription.unsubscribe();
  }

  onToggleSidenav(){
    this.toggle.emit();
  }
}
