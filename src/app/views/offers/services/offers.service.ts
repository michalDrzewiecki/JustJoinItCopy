import { Offer } from '../offers.interfaces'
import { Injectable } from '@angular/core';
import { NavigationService, HttpClientService } from 'src/app/shared/services';
import { Subject } from 'rxjs';

@Injectable()
export class OffersService{
    hoveredOfferChanged: Subject<Offer> = new Subject<Offer>();
    offers: Offer[] = [];
    
    constructor(private navigationService: NavigationService, private httpClientService: HttpClientService) {

    }

    public async loadOffers(): Promise<Offer[]>{
        this.offers = await this.httpClientService.loadOffers();
        for(let offer of this.offers){
            this.setColor(offer);
        }
        return this.offers;
    }

    private setColor(offer: Offer){
        let mainSkill: {technology: {name: string, color: string}, level: number} = {technology: {name:"", color:"white"}, level: 0};
        for(let skill of offer.requiredSkills){
            if(mainSkill.level < skill.level){
                mainSkill = skill;
            }
        }
        offer.color = mainSkill.technology.color;
    }

    public getOffers():Offer[]{
        return this.offers.slice();
    }

    public getOffer(tag:string):Offer{
        for(let tempOffer of this.offers){
            if(tempOffer.routingTag == tag){
                return tempOffer;
            }
        }
    }

    public getAppRouterUrls(){
        return this.navigationService.getAppRouterUrls();
    }

    public getDate(offer: Offer):string{
        let oneDay = 24*60*60*1000; 
        let today = new Date();
        let offerDate = new Date(offer.insertionDate);
        let daysDifference = Math.floor(Math.abs((today.getTime() - offerDate.getTime())/(oneDay)));
        if(daysDifference < 1){
          return "New";
        }
        else{
          return daysDifference + "d ago";
        }
    }

    onHoveredOfferChanged(offer: Offer): void{
        this.hoveredOfferChanged.next(offer);
    } 
}