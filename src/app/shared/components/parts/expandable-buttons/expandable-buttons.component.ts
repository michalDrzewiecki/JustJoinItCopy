import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expandable-buttons',
  templateUrl: './expandable-buttons.component.html',
  styleUrls: ['./expandable-buttons.component.scss'],
})
export class ExpandableButtonsComponent implements OnInit{
  @ViewChild('salaryText') salaryText: ElementRef;
  @ViewChild('experienceText') experienceText: ElementRef;
  subscription: Subscription;
  levels: string[];
  
  constructor(private navigationService: NavigationService, 
                private route: ActivatedRoute,
                private router: Router) {}

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
    let newValue: string = "";
    if(event.currentTarget.id == "all"){
      newValue = "Exp.level"
    }
    else{
      newValue = event.currentTarget.id;
    }
    this.experienceText.nativeElement.innerHTML = newValue;
  }
}