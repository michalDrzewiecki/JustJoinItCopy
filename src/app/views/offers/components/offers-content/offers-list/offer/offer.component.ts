import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/views/offers/model/offer.model';

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
    this.tag = this.offer.getRoutingTag();
  }
}