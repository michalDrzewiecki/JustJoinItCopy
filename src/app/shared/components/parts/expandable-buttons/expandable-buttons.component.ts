import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { MyParams } from 'src/app/shared/shared.enums';
import { MatSlider } from '@angular/material';

@Component({
  selector: 'app-expandable-buttons',
  templateUrl: './expandable-buttons.component.html',
  styleUrls: ['./expandable-buttons.component.scss'],
})
export class ExpandableButtonsComponent implements OnInit, OnDestroy{
  @ViewChild('salaryText') salaryText: ElementRef;
  @ViewChild('experienceText') experienceText: ElementRef;
  @ViewChild('slider') slider: MatSlider;
  subscription: Subscription;
  levels: string[];
  city: string;
  
  constructor(private navigationService: NavigationService, 
                private route: ActivatedRoute,
                private router: Router) {}

  ngOnInit(){
    this.levels = this.navigationService.getExperienceLevelArray();
    this.subscription = this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd ){
        this.setInitialSalary(this.navigationService.checkParam(this.router, MyParams.salary));
        this.setInitialLevel(this.navigationService.checkParam(this.router, MyParams.level));
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  setInitialSalary(value: string): void{
    if(value != null){
      let num: string = value.slice(0, -1);
      let numericValue: number = Number(num);
      if(!isNaN(numericValue) && numericValue > 0 && numericValue <= 50){
        numericValue *= 1000;
        this.salaryText.nativeElement.innerHTML = this.sliderChange(numericValue);
        this.slider.value = numericValue;
      }
    }
    else{
      this.salaryText.nativeElement.innerHTML = this.sliderChange(0);
      this.slider.value = 0;
    }
  }

  setInitialLevel(value: string): void{
    if(value != null){
      for(let level of this.levels){
        if(value == level){
          this.experienceText.nativeElement.innerHTML = this.experienceChange(value);
          break;
        }
      }
    }
    else{
      this.experienceText.nativeElement.innerHTML =this.experienceChange(this.navigationService.DEFAULT_PARAM);
    }
  }

  onSliderSalaryChange(event: any):void{
    let newValue: string = this.sliderChange(event.value);
    let paramValue: string = this.navigationService.DEFAULT_PARAM;
    if(newValue != "Salary"){
      let salary: number = event.value/1000;
      paramValue = salary + "k";
    }
    this.salaryText.nativeElement.innerHTML = newValue;
    this.navigationService.setParam(this.router, MyParams.salary, paramValue);
  }

  sliderChange(value: number): string{
    let newValue: string = "";
    if(value == 0){
      newValue = "Salary";
    }
    else{
      newValue = "> "+ value + " PLN";
    }
    return newValue;
  }
  
  onExperienceLevelChoose(event: any):void{
    let newValue: string = this.experienceChange(event.currentTarget.id);
    this.experienceText.nativeElement.innerHTML = newValue;
    this.navigationService.setParam(this.router, MyParams.level, event.currentTarget.id);
  }

  experienceChange(value: string): string{
    let newValue: string = "";
    if(value == "all"){
      newValue = "Exp.level"
    }
    else{
      newValue = value;
    }
    return newValue;
  }
}