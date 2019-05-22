export interface Offer{
    companyName: string,
    companySize: number,
    companyLogo: string,
    companyAddress: {streetName: string, buildingNumber: Number, city: string},
    companyWebPage: string,
    position: string,
    salary: {lowerLimit:number, upperLimit:number},
    tags: string[],
    routingTag: string,
    experience: string,
    agreementType: string,
    description: string,
    requiredSkills: {technology: {name: string, color: string}, level: number}[],
    insertionDate: Date,
    author: {name: string, surname: string},
    isHidden: boolean,
    isAddressTransformed: boolean,
    yCoordinate: number,
    xCoordinate: number,
    color: string
}

