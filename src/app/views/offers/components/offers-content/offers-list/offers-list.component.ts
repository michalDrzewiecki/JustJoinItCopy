import { Component, OnInit } from '@angular/core';

import { Offer } from '../../../model/offer.model';
import { OffersService } from '../../../services';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  private offers: Offer[];
  
  constructor(private offersService: OffersService) {}

  ngOnInit(){
    this.offers = this.offersService.getOffers();
  }
}