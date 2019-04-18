import { Agreement } from './offers.enums'
import { ExperienceLevel, Technology } from '../../shared/shared.enums'

export interface Address{
    streetName: string,
    buildingNumber: Number,
    city: string
}

export interface Offer{
    companyName: string,
    companySize: number,
    companyLogo: string,
    companyAddress: Address,
    position: string,
    salary: {lowerLimit:number, upperLimit:number},
    tags: string[],
    routingTag: string,
    experience: ExperienceLevel,
    agreementType: Agreement,
    description: string,
    insertionDate: Date, 
    requiredSkills: {technology: Technology, level: number}[]
}

