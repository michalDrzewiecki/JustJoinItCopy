import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Offer } from '../views/offers/offers.interfaces';
import { OffersService } from '../views/offers/services';
  
@Injectable()  
export class OffersResolver implements Resolve<Offer[]> {  
  constructor(private offersService: OffersService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Promise<Offer[]>{  
    return this.offersService.loadOffers().then(offers=>{
      if(offers){
        return offers;
      }
      else{
        return null;
      }
    });  
  }  
} 