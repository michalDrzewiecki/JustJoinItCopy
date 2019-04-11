import { Offer } from '../model/offer.model'
import { Address } from '../model/address.model';
import { Experience } from '../../../shared/model/experience.enum.model';
import { Technology } from '../../../shared/model/technology.enum.model';
import { Agreement } from '../model/agreement.enum.model';

export class OffersService {
    private offers: Offer[] = [];
    
    constructor() {
        let offer = new Offer("Nazwa",100,"obrazek",new Address("gdanska", 8, "Gdansk"),"programista",{lowerLimit:1000, upperLimit:2000},["praca", "platna", "c++"],"pracaJakas",Experience.mid,Agreement.Temporary,"opis nowo stworzonej pracy",new Date(2018, 3, 12),[{technology: Technology.JavaScript, level:2}]);
        let offer2 = new Offer("McDonald",1000,"MC",new Address("luzycka", 10, "Gdynia"),"grafik",{lowerLimit:10000, upperLimit:22200},["java", "praca", "super"],"pracaMC",Experience.junior,Agreement.B2B,"opis pracy w MC",new Date(2019, 4, 11),[{technology: Technology.JavaScript, level:3}, {technology: Technology.Java, level:5}]);
        this.offers.push(offer);
        this.offers.push(offer2);
    }

    public getOffers():Offer[]{
        return this.offers.slice();
    }

    public getOffer(tag:string):Offer{
        for(let tempOffer of this.offers){
            if(tempOffer.getRoutingTag() == tag){
                return tempOffer;
            }
        }
    }
}