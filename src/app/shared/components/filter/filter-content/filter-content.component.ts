import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';




@Component({
  selector: 'app-filter-content',
  templateUrl: './filter-content.component.html',
  styleUrls: ['./filter-content.component.scss'],
})
export class FilterContentComponent implements OnInit {
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