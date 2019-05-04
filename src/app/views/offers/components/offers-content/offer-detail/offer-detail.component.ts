import { Component, OnInit } from '@angular/core';
import { Offer } from '../../../offers.interfaces'
import { OffersService } from 'src/app/views/offers/services';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss'],
})
export class OfferDetailComponent implements OnInit {
  private offer:Offer;
  private tag:string;
  private error:boolean = false;

  constructor(private offersService: OffersService,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.tag = params['id'];
        this.offer = this.offersService.getOffer(this.tag);
        if(typeof this.offer === "undefined"){
          this.error = true;
        }
      }
    );
  }

  apply(){
    document.getElementById("applyForm").scrollIntoView();
  }
}