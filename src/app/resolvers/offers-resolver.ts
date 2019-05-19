import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Offer } from '../views/offers/offers.interfaces';
import { OffersService } from '../views/offers/services';
import { HttpClientService } from '../shared/http';
import { MyParams } from '../shared/shared.enums';
  
@Injectable()  
export class OffersResolver implements Resolve<Offer[]> {  
  constructor(private offersService: OffersService, private httpClientService: HttpClientService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Promise<Offer[]>{
    let params:string[] = this.httpClientService.defaultParams.slice();
    route.params['city'] ? params[MyParams.city] = route.params['city'] : null; 
    route.params['technology'] ? params[MyParams.technology] = route.params['technology'] : null; 
    route.params['level'] ? params[MyParams.level] = route.params['level'] : null; 
    route.params['salary'] ? params[MyParams.salary] = route.params['salary'] : null;
    this.httpClientService.setParams(params);
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