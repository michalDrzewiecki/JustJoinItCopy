import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';

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
  
  constructor(private navigationService: NavigationService){}

  ngOnInit(){
    this.navigationService.getCities(this.mainCities, this.hiddenCities);
    this.navigationService.getTechnologies(this.mainTechnologies, this.hiddenTechnologies);
  }
}