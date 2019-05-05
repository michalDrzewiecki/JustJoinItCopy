import { Component, ElementRef, ViewChild, OnInit, OnDestroy, Renderer } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/shared/services';

@Component({
  selector: 'app-offers-content',
  templateUrl: './offers-content.component.html',
  styleUrls: ['./offers-content.component.scss'],
})
export class OffersContentComponent implements OnInit, OnDestroy {
  @ViewChild('theme') container: ElementRef; 
  themeSubscription: Subscription;
  constructor(private renderer: Renderer, private navigationService: NavigationService) {}

  ngOnInit(){
    this.themeSubscription = this.navigationService.result.subscribe((value: {actual: string, last: string})=>{
      this.renderer.setElementClass(this.container.nativeElement, value.actual, true);
      this.renderer.setElementClass(this.container.nativeElement,value.last, false);
    });
  }

  ngOnDestroy(){
    this.themeSubscription.unsubscribe();
  }
}