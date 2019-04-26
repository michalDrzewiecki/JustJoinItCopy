import { Offer } from '../offers.interfaces'
import { Agreement, MyColor } from '../offers.enums'
import { Technology, ExperienceLevel } from '../../../shared/shared.enums'
import { Injectable } from '@angular/core';
import { NavigationService } from 'src/app/shared/services';

@Injectable()
export class OffersService{
    private offers: Offer[] = [
        {companyName: "Intel", companySize:10000, companyLogo: "logo", companyAddress:{streetName:"Lotników Polskich", buildingNumber: 59, city: "Gdańsk"}, companyWebPage:"www.company.pl", position:"programista", salary:{lowerLimit: 2000, upperLimit: 5000}, tags:["praca", "intel", "kasa"], routingTag: "IntelPRACA", experience: ExperienceLevel.junior, agreementType: Agreement.Permanent, description:"praca wSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? intelu dobrze płatna", insertionDate:new Date(2018, 3, 4), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4},{technology:Technology.Scala, level: 5}, {technology:Technology.PHP, level: 3},{technology:Technology.Java, level: 2}, {technology:Technology.PHP, level: 1}]},
        {companyName: "McDonald", companySize:200000, companyLogo: "logo", companyAddress:{streetName:"Dębowa", buildingNumber: 39, city: "Banino"}, companyWebPage:"www.company.pl", position:"grafik", salary:{lowerLimit: 100, upperLimit: 5000}, tags:["praca", "super", "kasa"], routingTag: "McDonaldPRACA", experience: ExperienceLevel.junior, agreementType: Agreement.B2B, description:"praca dobrze płatna", insertionDate:new Date(2019, 3, 24), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Neoteric", companySize:100, companyLogo: "logo", companyAddress:{streetName:"Sienna", buildingNumber: 75, city: "Warszawa"}, companyWebPage:"www.company.pl", position:"programista", salary:{lowerLimit: 15000, upperLimit: 20000}, tags:["praca", "fajna", "kasa"], routingTag: "Neo", experience: ExperienceLevel.mid, agreementType: Agreement.Temporary, description:"praca bardzo dobrze płatna", insertionDate:new Date(2019, 3, 18), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Tesso", companySize:15, companyLogo: "logo", companyAddress:{streetName:"Podole", buildingNumber: 60, city: "Kraków"}, companyWebPage:"www.company.pl", position:"programista", salary:{lowerLimit: 12000, upperLimit: 13000}, tags:["praca", "porzadna", "pieniądze"], routingTag: "TEsso", experience: ExperienceLevel.senior, agreementType: Agreement.Permanent, description:"praca super dobrze płatna", insertionDate:new Date(2019, 3, 23), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Auchan", companySize:25, companyLogo: "logo", companyAddress:{streetName:"Tęczowa", buildingNumber: 7, city: "Wrocław"}, companyWebPage:"www.company.pl", position:"sieciowiec", salary:{lowerLimit: 5000, upperLimit: 5500}, tags:["praca", "bardzo", "kasa"], routingTag: "Auchan", experience: ExperienceLevel.all, agreementType: Agreement.B2B, description:"praca hiper dobrze płatna", insertionDate:new Date(2019, 3, 12), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Intel", companySize:10000, companyLogo: "logo", companyAddress:{streetName:"Śląska", buildingNumber: 11, city: "Gdynia"}, companyWebPage:"www.company.pl", position:"programista", salary:{lowerLimit: 2000, upperLimit: 5000}, tags:["praca", "intel", "kasa"], routingTag: "IntelPRACAA", experience: ExperienceLevel.junior, agreementType: Agreement.Permanent, description:"praca w intelu dobrze płatna", insertionDate:new Date(2018, 3, 4), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "McDonald", companySize:200000, companyLogo: "logo", companyAddress:{streetName:"Bojkowska", buildingNumber: 37, city: "Gliwice"}, companyWebPage:"www.company.pl", position:"grafik", salary:{lowerLimit: 100, upperLimit: 5000}, tags:["praca", "super", "kasa"], routingTag: "McDonaldPRACAA", experience: ExperienceLevel.junior, agreementType: Agreement.B2B, description:"praca dobrze płatna", insertionDate:new Date(2019, 4, 18), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Neoteric", companySize:100, companyLogo: "logo", companyAddress:{streetName:"Kościuszki", buildingNumber: 82, city: "Wrocław"}, companyWebPage:"www.company.pl", position:"programista", salary:{lowerLimit: 15000, upperLimit: 20000}, tags:["praca", "fajna", "kasa"], routingTag: "NeoA", experience: ExperienceLevel.mid, agreementType: Agreement.Temporary, description:"praca bardzo dobrze płatna", insertionDate:new Date(2019, 4, 18), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Tesso", companySize:15, companyLogo: "logo", companyAddress:{streetName:"Grzybowska", buildingNumber: 43, city: "Warszawa"}, companyWebPage:"www.company.pl", position:"programista", salary:{lowerLimit: 12000, upperLimit: 13000}, tags:["praca", "porzadna", "pieniądze"], routingTag: "TEssoA", experience: ExperienceLevel.senior, agreementType: Agreement.Permanent, description:"praca super dobrze płatna", insertionDate:new Date(2019, 3, 23), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Auchan", companySize:25, companyLogo: "logo", companyAddress:{streetName:"Mostowa", buildingNumber: 11, city: "Poznań"}, companyWebPage:"www.company.pl", position:"sieciowiec", salary:{lowerLimit: 5000, upperLimit: 5500}, tags:["praca", "bardzo", "kasa"], routingTag: "AuchanA", experience: ExperienceLevel.all, agreementType: Agreement.B2B, description:"praca hiper dobrze płatna", insertionDate:new Date(2019, 2, 12), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Intel", companySize:10000, companyLogo: "logo", companyAddress:{streetName:"Targowa", buildingNumber: 35, city: "Łódź"}, companyWebPage:"www.company.pl", position:"programista", salary:{lowerLimit: 2000, upperLimit: 5000}, tags:["praca", "intel", "kasa"], routingTag: "IntelPRACAAA", experience: ExperienceLevel.junior, agreementType: Agreement.Permanent, description:"praca w intelu dobrze płatna", insertionDate:new Date(2018, 3, 4), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "McDonald", companySize:200000, companyLogo: "logo", companyAddress:{streetName:"Mikołaja Kopernika", buildingNumber: 95, city: "Białystok"}, companyWebPage:"www.company.pl", position:"grafik", salary:{lowerLimit: 100, upperLimit: 5000}, tags:["praca", "super", "kasa"], routingTag: "McDonaldPRACAAA", experience: ExperienceLevel.junior, agreementType: Agreement.B2B, description:"praca dobrze płatna", insertionDate:new Date(2019, 4, 18), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Neoteric", companySize:100, companyLogo: "logo", companyAddress:{streetName:"Żurawia", buildingNumber: 71, city: "Białystok"}, companyWebPage:"www.company.pl", position:"programista", salary:{lowerLimit: 15000, upperLimit: 20000}, tags:["praca", "fajna", "kasa"], routingTag: "NeoAA", experience: ExperienceLevel.mid, agreementType: Agreement.Temporary, description:"praca bardzo dobrze płatna", insertionDate:new Date(2019, 4, 18), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Tesso", companySize:15, companyLogo: "logo", companyAddress:{streetName:"Wyzwolenia", buildingNumber: 13, city: "Olsztyn"}, companyWebPage:"www.company.pl", position:"programista", salary:{lowerLimit: 12000, upperLimit: 13000}, tags:["praca", "porzadna", "pieniądze"], routingTag: "TEssoAA", experience: ExperienceLevel.senior, agreementType: Agreement.Permanent, description:"praca super dobrze płatna", insertionDate:new Date(2019, 3, 23), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Auchan", companySize:25, companyLogo: "logo", companyAddress:{streetName:"Warszawska", buildingNumber: 18, city: "Rzeszów"}, companyWebPage:"www.company.pl", position:"sieciowiec", salary:{lowerLimit: 5000, upperLimit: 5500}, tags:["praca", "bardzo", "kasa"], routingTag: "AuchanAA", experience: ExperienceLevel.all, agreementType: Agreement.B2B, description:"praca hiper dobrze płatna", insertionDate:new Date(2019, 2, 12), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Auchan", companySize:25, companyLogo: "logo", companyAddress:{streetName:"sadsad", buildingNumber: 18, city: "safasf"}, companyWebPage:"www.company.pl", position:"sieciowiec", salary:{lowerLimit: 5000, upperLimit: 5500}, tags:["praca", "bardzo", "kasa"], routingTag: "AuchanAAA", experience: ExperienceLevel.all, agreementType: Agreement.B2B, description:"praca hiper dobrze płatna", insertionDate:new Date(2019, 2, 12), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]}
    ];
    
    constructor(private navigationService: NavigationService) {
        const myColor = Object.keys(MyColor)
                                .map(n => Number.parseInt(n))
                                .filter(n => !Number.isNaN(n));
        const border = myColor.length;
        let index = 0;
        for(let offer of this.offers){
            index = Math.floor(Math.random() * border);
            offer.color = MyColor[index];
        }
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

    getDate(offer: Offer):string{
        let oneDay = 24*60*60*1000; 
        let today = new Date();
        let daysDifference = Math.floor(Math.abs((today.getTime() - offer.insertionDate.getTime())/(oneDay)));
        if(daysDifference < 1){
          return "New";
        }
        else{
          return daysDifference + "d ago";
        }
      }
}