import { Component, OnInit, ElementRef, ViewChild, OnDestroy, Renderer } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';
import { MyParams } from '../../../shared.enums'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-content',
  templateUrl: './filter-content.component.html',
  styleUrls: ['./filter-content.component.scss'],
})
export class FilterContentComponent implements OnInit, OnDestroy {
  mainCities: string[] = [];
  hiddenCities: string[] = [];
  mainTechnologies: string[] = [];
  hiddenTechnologies: string[] = [];
  cityParam: MyParams = MyParams.city;
  technologyParam: MyParams = MyParams.technology;
  @ViewChild('theme') container: ElementRef; 
  themeSubscription: Subscription;
 
  constructor(private navigationService: NavigationService, private renderer: Renderer){}

  ngOnInit(){
    this.navigationService.getCities(this.mainCities, this.hiddenCities);
    this.navigationService.getTechnologies(this.mainTechnologies, this.hiddenTechnologies);
    this.themeSubscription = this.navigationService.result.subscribe((value: {actual: string, last: string})=>{
      this.renderer.setElementClass(this.container.nativeElement, value.actual, true);
      this.renderer.setElementClass(this.container.nativeElement,value.last, false);
    });
  }
  ngOnDestroy(){
    this.themeSubscription.unsubscribe();
  }
}