export class Address{
    constructor(
        private streetName: string,
        private buildingNumber: Number,
        private city: string
    ){}

    public getAddress():string{
        let address:string = "ul."+ this.streetName + ", " + this.buildingNumber + ", " + this.city;
        return address;
    }

    public getCity():string{
        return this.city;
    }
}