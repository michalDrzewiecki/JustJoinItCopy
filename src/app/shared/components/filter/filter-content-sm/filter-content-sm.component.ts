import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';
import { Subscription } from 'rxjs';
import { Router, Event, NavigationEnd } from '@angular/router';
import { MyParams } from 'src/app/shared/shared.enums';

@Component({
  selector: 'app-filter-content-sm',
  templateUrl: './filter-content-sm.component.html',
  styleUrls: ['./filter-content-sm.component.scss'],
})
export class FilterContentSmComponent implements OnInit {
  mainCities: string[] = [];
  hiddenCities: string[] = [];
  mainTechnologies: string[] = [];
  hiddenTechnologies: string[] = [];
  subscription: Subscription;
  themeSubscription: Subscription;
  @ViewChild('cities') cities: ElementRef; 
  @ViewChild('technologies') technologies: ElementRef; 
  @ViewChild('theme') container: ElementRef; 
  
  constructor(private navigationService: NavigationService, private router: Router, private renderer: Renderer){}

  ngOnInit(){
    this.navigationService.getCities(this.mainCities, this.hiddenCities);
    this.navigationService.getTechnologies(this.mainTechnologies, this.hiddenTechnologies);
    this.subscription = this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd ){
        this.setInitialCity(this.navigationService.checkParam(this.router, MyParams.city))
        this.setInitialTechnology(this.navigationService.checkParam(this.router, MyParams.technology))
      }
    });
    this.themeSubscription = this.navigationService.result.subscribe((value: {actual: string, last: string})=>{
      this.renderer.setElementClass(this.container.nativeElement, value.actual, true);
      this.renderer.setElementClass(this.container.nativeElement,value.last, false);
    });
  }

  ngOnDestroy(){
    this.themeSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

  setInitialCity(value: string): void{
    if(value != null){
      for(let city of this.mainCities.concat(this.hiddenCities)){
        if(value == city){
          this.cities.nativeElement.value = value;
          return;
        }
      }
    }
  }

  setInitialTechnology(value: string): void{
    if(value != null){
      for(let technology of this.mainTechnologies.concat(this.hiddenTechnologies)){
        if(value == technology){
          this.technologies.nativeElement.value = value;
          return;
        }
      }
    }
  }

  cityChange():void{
    let value: string = this.cities.nativeElement.value;
    this.navigationService.setParam(this.router, MyParams.city, value);
  }

  technologyChange():void{
    let value: string = this.technologies.nativeElement.value;
    this.navigationService.setParam(this.router, MyParams.technology, value);
  }
}