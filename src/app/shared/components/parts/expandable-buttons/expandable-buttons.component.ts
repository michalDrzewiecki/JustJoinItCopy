import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';

@Component({
  selector: 'app-expandable-buttons',
  templateUrl: './expandable-buttons.component.html',
  styleUrls: ['./expandable-buttons.component.scss'],
})
export class ExpandableButtonsComponent implements OnInit{
  @ViewChild('salaryText') salaryText: ElementRef;
  @ViewChild('experienceText') experienceText: ElementRef;
  levels: string[];
  
  constructor(private navigationService: NavigationService) {}

  ngOnInit(){
    this.levels = this.navigationService.getExperienceLevelArray();
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
}