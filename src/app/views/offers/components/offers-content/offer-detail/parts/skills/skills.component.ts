import { Component} from '@angular/core';
import { OffersService } from 'src/app/views/offers/services';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/views/offers/offers.interfaces';
import { Technology } from 'src/app/shared/shared.enums';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  maxLevel: number = 5;
  numbers: number[] = [];
  levels: string[]=["student","junior", "regular", "advanced", "proffesional"];
  appRouterUrls;
  offer: Offer;
    
  constructor( private offersService: OffersService, 
                private route: ActivatedRoute){}

  ngOnInit(){
    this.appRouterUrls = this.offersService.getAppRouterUrls();
    this.route.params.subscribe(
      params => {
        this.offer = this.offersService.getOffer(params['id']);
    });
    this.numbers = Array(this.maxLevel).fill(0);
  }

  getTechnology(level: any):string{
    return Technology[level.technology];
  }

  getLevel(level: any):string{
    return this.levels[level.level - 1];
  }
  
}