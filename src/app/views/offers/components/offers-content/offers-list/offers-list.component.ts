import { Component, OnInit } from '@angular/core';
import { Offer } from '../../../offers.interfaces'
import { OffersService } from '../../../services';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  private offers: Offer[];
  noOffers: boolean = false;
  
  constructor(private offersService: OffersService) {}

  ngOnInit(){
    this.offers = this.offersService.getOffers();
    if(this.offers.length == 0){
      this.noOffers = true;
    }
  }
}