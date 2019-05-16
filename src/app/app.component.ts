import { Component, ViewChild, ElementRef, OnDestroy, OnInit} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { AppRouterUrls } from './app-routing.config';
import { Subscription } from 'rxjs';
import { OffersService } from './views/offers/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  appRouterUrls;
  subscription: Subscription;
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('filter') filter: ElementRef;
  
  constructor(private router: Router){
    this.appRouterUrls = AppRouterUrls;
    this.subscription = this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd ){
        if(event.url.includes(this.appRouterUrls.LOGIN) || event.url.includes(this.appRouterUrls.REGISTER)){
          this.nav.nativeElement.style.display = "none";
          this.filter.nativeElement.style.display = "none";
        }
        else{
          this.nav.nativeElement.style.display = "initial";
          this.filter.nativeElement.style.display = "initial";
        }
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
