import { Address } from './address.model';
import { Experience } from '../../../shared/model/experience.enum.model';
import { Agreement } from './agreement.enum.model';
import { Technology } from '../../../shared/model/technology.enum.model';

export class Offer{
    constructor(
        private companyName: string,
        private companySize: number,
        private companyLogo: string,
        private companyAddress: Address,
        private position: string,
        private salary: {lowerLimit:number, upperLimit:number},
        private tags: string[],
        private routingTag: string,
        private experience: Experience,
        private agreementType: Agreement,
        private description: string,
        private insertionDate: Date, 
        private requiredSkills: {technology: Technology, level: number}[]
    ){};

    public getCompanyName():string{
        return this.companyName; 
    }
    public getCompanySize():number{
        return this.companySize; 
    }
    public getCompanyLogo():string{
        return this.companyLogo; 
    }
    public getCompanyAddress():Address{
        return this.companyAddress; 
    }
    public getPosition():string{
        return this.position;
    }
    public getSalary():{lowerLimit: number,upperLimit: number}{
        return this.salary; 
    }
    public getTags():string[]{
        return this.tags.slice(); 
    }
    public getRoutingTag():string{
        return this.routingTag; 
    }
    public getExperience():Experience{
        return this.experience; 
    }
    public getAgreementType():Agreement{
        return this.agreementType; 
    }
    public getDescription():string{
        return this.description; 
    }
    public getInsertionDate():Date{
        return this.insertionDate; 
    }
    public getRequiredSkills():{technology:Technology, level: number}[]{
        return this.requiredSkills; 
    }

    public getSalaryAsString():string{
        let tempSalary:string = this.salary.lowerLimit + " - " + this.salary.upperLimit + " PLN";
        return tempSalary;
    }

    public getDateTag():string{
        let currentDate:Date = new Date();
        let timeDiff:number = currentDate.getTime()-this.insertionDate.getTime();
        let dayDiff:number = timeDiff/(1000*3600*24);
        if(dayDiff < 1){
            return "new";
        } 
        else{
            return Math.floor(dayDiff) + "d"; 
        }
    }
}