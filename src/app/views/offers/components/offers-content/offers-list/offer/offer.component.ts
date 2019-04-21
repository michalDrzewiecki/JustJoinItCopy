import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../../../../offers.interfaces'

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit{
  @Input() offer: Offer;
  private tag: string;
  constructor() {}

  ngOnInit(){
    this.tag = this.offer.routingTag;
  }

  getMoney():string{
    return this.offer.salary.lowerLimit + " - " + this.offer.salary.upperLimit + " PLN";
  }
  
  getDate():string{
    let oneDay = 24*60*60*1000; 
    let today = new Date();
    let daysDifference = Math.floor(Math.abs((today.getTime() - this.offer.insertionDate.getTime())/(oneDay)));
    if(daysDifference < 1){
      return "New";
    }
    else{
      return daysDifference + "d ago";
    }
  }

  getAddress():string{
    return "ul. " + this.offer.companyAddress.streetName + " " + this.offer.companyAddress.buildingNumber + ", " + this.offer.companyAddress.city;
  }
}