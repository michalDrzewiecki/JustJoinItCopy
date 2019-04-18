import { Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit} from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';
import { NavigationService } from '../../services';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, AfterViewInit{
  @ViewChild('salaryText') salaryText: ElementRef;
  @ViewChild('experienceText') experienceText: ElementRef;
  @ViewChild('cityParent') cityParent: ElementRef;
  @ViewChild('technologyParent') technologyParent: ElementRef;
  @ViewChild('hiddenCity', {read: ElementRef}) hiddenCity: ElementRef;
  @ViewChild('hiddenTechnology', {read: ElementRef}) hiddenTechnology: ElementRef;
  appRouterUrls = AppRouterUrls;
  levels: string[];
  mainCities: string[] = [];
  hiddenCities: string[] = [];
  mainTechnologies: string[] = [];
  hiddenTechnologies: string[] = [];
  hiddenCityName: string = "";
  hiddenTechnologyName: string = ""
  

  constructor(private navigationService: NavigationService, private renderer: Renderer) {}

  ngOnInit(){
    this.levels = this.navigationService.getExperienceLevelArray();
    this.navigationService.getCities(this.mainCities, this.hiddenCities);
    this.navigationService.getTechnologies(this.mainTechnologies, this.hiddenTechnologies);
  }

  ngAfterViewInit(){
    this.renderer.setElementClass(this.cityParent.nativeElement.children[0], 'buttonChecked', true);
    this.renderer.setElementClass(this.technologyParent.nativeElement.children[0], 'buttonChecked', true);
    this.renderer.setElementClass(this.hiddenCity.nativeElement, 'hideElement', true);
    this.renderer.setElementClass(this.hiddenTechnology.nativeElement, 'hideElement', true);
  }
  
  onSliderSalaryChange(event: any):void{
    let newValue: string = "";
    if(event.value == 0){
      newValue = "Salary";
    }
    else{
      newValue = "> "+ event.value + " PLN";
    }
    this.salaryText.nativeElement.innerHTML = newValue;
  }
  
  onExperienceLevelChoose(event: any):void{
    let newValue: string = event.currentTarget.id;
    this.experienceText.nativeElement.innerHTML = newValue;
  }
  
  onCityButtonClicked(event: any):void{
   this.clickedButtonCheck(event.currentTarget.id, this.cityParent);
  }

  onCityHiddenButtonClicked(event: any):void{
    this.hiddenCityName = event.currentTarget.id;
    this.clickedHiddenButton(event.currentTarget.id, this.hiddenCity, this.cityParent);

  }

  onTechnologyButtonClicked(event: any):void{
    this.clickedButtonCheck(event.currentTarget.id, this.technologyParent);
  }

  onTechnologyHiddenButtonClicked(event: any):void{
    this.hiddenTechnologyName = event.currentTarget.id;
    this.clickedHiddenButton(event.currentTarget.id, this.hiddenTechnology, this.technologyParent);
  }
  
  clickedHiddenButton(id: string, arg: ElementRef, argParent: ElementRef):void{
    this.renderer.setElementClass(arg.nativeElement, 'hideElement', false);
    this.clickedButtonCheck(id, argParent);
    this.renderer.setElementClass(arg.nativeElement, 'buttonChecked', true);
  }
  clickedButtonCheck(id: string, argParent: ElementRef):void{
    let parent = argParent.nativeElement.children;
    for (let i = 0; i < parent.length; i++){
      this.renderer.setElementClass(parent[i], 'buttonChecked', false);
      if(parent[i].id == id){
        this.renderer.setElementClass(parent[i], 'buttonChecked', true);
      }
    }
  }
}