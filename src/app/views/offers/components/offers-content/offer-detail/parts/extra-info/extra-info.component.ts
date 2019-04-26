import { Component} from '@angular/core';
import { Offer } from 'src/app/views/offers/offers.interfaces';
import { OffersService } from 'src/app/views/offers/services';
import { ActivatedRoute } from '@angular/router';
import { Agreement } from '../../../../../offers.enums';
import { ExperienceLevel } from '../../../../../../../shared/shared.enums';


@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.scss'],
})
export class ExtraInfoComponent{
  offer: Offer;
  appRouterUrls;
  
  constructor(private offersService: OffersService, 
                private route: ActivatedRoute){}

  ngOnInit(){
    this.appRouterUrls = this.offersService.getAppRouterUrls();
    this.route.params.subscribe(
      params => {
        this.offer = this.offersService.getOffer(params['id']);
      });
  }

  getAgreementType():string{
    return Agreement[this.offer.agreementType];
  }

  getExperienceLevel():string{
    return ExperienceLevel[this.offer.experience];
  }

}