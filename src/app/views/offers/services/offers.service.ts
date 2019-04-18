import { Offer } from '../offers.interfaces'
import { Agreement } from '../offers.enums'
import { Technology, ExperienceLevel, City } from '../../../shared/shared.enums'

export class OffersService {
    private offers: Offer[] = [
        {companyName: "Intel", companySize:10000, companyLogo: "logo", companyAddress:{streetName:"Polska", buildingNumber: 12, city: "Bydgoszcz"}, position:"programista", salary:{lowerLimit: 2000, upperLimit: 5000}, tags:["praca", "intel", "kasa"], routingTag: "IntelPRACA", experience: ExperienceLevel.junior, agreementType: Agreement.Permanent, description:"praca w intelu dobrze płatna", insertionDate:new Date(2018, 3, 4), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "McDonald", companySize:200000, companyLogo: "logo", companyAddress:{streetName:"Pomyślna", buildingNumber: 12, city: "Bydgoszcz"}, position:"grafik", salary:{lowerLimit: 100, upperLimit: 5000}, tags:["praca", "super", "kasa"], routingTag: "McDonaldPRACA", experience: ExperienceLevel.junior, agreementType: Agreement.B2B, description:"praca dobrze płatna", insertionDate:new Date(2019, 3, 17), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Neoteric", companySize:100, companyLogo: "logo", companyAddress:{streetName:"Jakaś", buildingNumber: 12, city: "Katowice"}, position:"programista", salary:{lowerLimit: 15000, upperLimit: 20000}, tags:["praca", "fajna", "kasa"], routingTag: "Neo", experience: ExperienceLevel.mid, agreementType: Agreement.Temporary, description:"praca bardzo dobrze płatna", insertionDate:new Date(2019, 3, 18), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Tesso", companySize:15, companyLogo: "logo", companyAddress:{streetName:"Tamta", buildingNumber: 12, city: "Poznań"}, position:"programista", salary:{lowerLimit: 12000, upperLimit: 13000}, tags:["praca", "porzadna", "pieniądze"], routingTag: "TEsso", experience: ExperienceLevel.senior, agreementType: Agreement.Permanent, description:"praca super dobrze płatna", insertionDate:new Date(2019, 3, 23), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Auchan", companySize:25, companyLogo: "logo", companyAddress:{streetName:"Opolska", buildingNumber: 12, city: "Trójmiasto"}, position:"sieciowiec", salary:{lowerLimit: 5000, upperLimit: 5500}, tags:["praca", "bardzo", "kasa"], routingTag: "Auchan", experience: ExperienceLevel.all, agreementType: Agreement.B2B, description:"praca hiper dobrze płatna", insertionDate:new Date(2019, 3, 12), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Intel", companySize:10000, companyLogo: "logo", companyAddress:{streetName:"Polska", buildingNumber: 12, city: "Bydgoszcz"}, position:"programista", salary:{lowerLimit: 2000, upperLimit: 5000}, tags:["praca", "intel", "kasa"], routingTag: "IntelPRACA", experience: ExperienceLevel.junior, agreementType: Agreement.Permanent, description:"praca w intelu dobrze płatna", insertionDate:new Date(2018, 3, 4), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "McDonald", companySize:200000, companyLogo: "logo", companyAddress:{streetName:"Pomyślna", buildingNumber: 12, city: "Bydgoszcz"}, position:"grafik", salary:{lowerLimit: 100, upperLimit: 5000}, tags:["praca", "super", "kasa"], routingTag: "McDonaldPRACA", experience: ExperienceLevel.junior, agreementType: Agreement.B2B, description:"praca dobrze płatna", insertionDate:new Date(2019, 4, 18), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Neoteric", companySize:100, companyLogo: "logo", companyAddress:{streetName:"Jakaś", buildingNumber: 12, city: "Katowice"}, position:"programista", salary:{lowerLimit: 15000, upperLimit: 20000}, tags:["praca", "fajna", "kasa"], routingTag: "Neo", experience: ExperienceLevel.mid, agreementType: Agreement.Temporary, description:"praca bardzo dobrze płatna", insertionDate:new Date(2019, 4, 18), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Tesso", companySize:15, companyLogo: "logo", companyAddress:{streetName:"Tamta", buildingNumber: 12, city: "Poznań"}, position:"programista", salary:{lowerLimit: 12000, upperLimit: 13000}, tags:["praca", "porzadna", "pieniądze"], routingTag: "TEsso", experience: ExperienceLevel.senior, agreementType: Agreement.Permanent, description:"praca super dobrze płatna", insertionDate:new Date(2019, 3, 23), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Auchan", companySize:25, companyLogo: "logo", companyAddress:{streetName:"Opolska", buildingNumber: 12, city: "Trójmiasto"}, position:"sieciowiec", salary:{lowerLimit: 5000, upperLimit: 5500}, tags:["praca", "bardzo", "kasa"], routingTag: "Auchan", experience: ExperienceLevel.all, agreementType: Agreement.B2B, description:"praca hiper dobrze płatna", insertionDate:new Date(2019, 2, 12), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Intel", companySize:10000, companyLogo: "logo", companyAddress:{streetName:"Polska", buildingNumber: 12, city: "Bydgoszcz"}, position:"programista", salary:{lowerLimit: 2000, upperLimit: 5000}, tags:["praca", "intel", "kasa"], routingTag: "IntelPRACA", experience: ExperienceLevel.junior, agreementType: Agreement.Permanent, description:"praca w intelu dobrze płatna", insertionDate:new Date(2018, 3, 4), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "McDonald", companySize:200000, companyLogo: "logo", companyAddress:{streetName:"Pomyślna", buildingNumber: 12, city: "Bydgoszcz"}, position:"grafik", salary:{lowerLimit: 100, upperLimit: 5000}, tags:["praca", "super", "kasa"], routingTag: "McDonaldPRACA", experience: ExperienceLevel.junior, agreementType: Agreement.B2B, description:"praca dobrze płatna", insertionDate:new Date(2019, 4, 18), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Neoteric", companySize:100, companyLogo: "logo", companyAddress:{streetName:"Jakaś", buildingNumber: 12, city: "Katowice"}, position:"programista", salary:{lowerLimit: 15000, upperLimit: 20000}, tags:["praca", "fajna", "kasa"], routingTag: "Neo", experience: ExperienceLevel.mid, agreementType: Agreement.Temporary, description:"praca bardzo dobrze płatna", insertionDate:new Date(2019, 4, 18), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Tesso", companySize:15, companyLogo: "logo", companyAddress:{streetName:"Tamta", buildingNumber: 12, city: "Poznań"}, position:"programista", salary:{lowerLimit: 12000, upperLimit: 13000}, tags:["praca", "porzadna", "pieniądze"], routingTag: "TEsso", experience: ExperienceLevel.senior, agreementType: Agreement.Permanent, description:"praca super dobrze płatna", insertionDate:new Date(2019, 3, 23), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
        {companyName: "Auchan", companySize:25, companyLogo: "logo", companyAddress:{streetName:"Opolska", buildingNumber: 12, city: "Trójmiasto"}, position:"sieciowiec", salary:{lowerLimit: 5000, upperLimit: 5500}, tags:["praca", "bardzo", "kasa"], routingTag: "Auchan", experience: ExperienceLevel.all, agreementType: Agreement.B2B, description:"praca hiper dobrze płatna", insertionDate:new Date(2019, 2, 12), requiredSkills:[{technology:Technology.Java, level: 5}, {technology:Technology.PHP, level: 4}]},
    ];
    
    constructor() {
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
}