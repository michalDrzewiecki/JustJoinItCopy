import { Component, Input, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { Offer } from '../../../../offers.interfaces'
import { OffersService } from 'src/app/views/offers/services';

@Component({
  selector: 'app-offer-sm',
  templateUrl: './offer-sm.component.html',
  styleUrls: ['./offer-sm.component.scss'],
})
export class OfferSmComponent implements OnInit{
  @ViewChild('frame') frame: ElementRef;
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
}