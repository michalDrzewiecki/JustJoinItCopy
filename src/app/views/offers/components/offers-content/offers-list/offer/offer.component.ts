import { Component, Input, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { Offer } from '../../../../offers.interfaces'
import { OffersService } from 'src/app/views/offers/services';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit{
  @ViewChild('frame') frame : ElementRef;
  @Input() offer: Offer;
  appRouterUrls;
  private tag: string;
  
  constructor(private renderer: Renderer, private offersService: OffersService) {}

  ngOnInit(){
    this.appRouterUrls = this.offersService.getAppRouterUrls();
    this.tag = this.offer.routingTag;
    this.renderer.setElementStyle(this.frame.nativeElement, 'backgroundColor', String(this.offer.color));
  }

  getMoney():string{
    return this.offer.salary.lowerLimit + " - " + this.offer.salary.upperLimit + " PLN";
  }
  
  getAddress():string{
    return "ul. " + this.offer.companyAddress.streetName + " " + this.offer.companyAddress.buildingNumber + ", " + this.offer.companyAddress.city;
  }

  onMouseOver():void{
    this.offersService.onHoveredOfferChanged(this.offer);
  }

  onMouseLeave():void{
    this.offersService.onHoveredOfferChanged(null);
  }

  onMouseClick():void{
    this.onMouseLeave();
  }
}