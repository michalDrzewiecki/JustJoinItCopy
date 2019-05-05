import { Component, OnInit, Renderer, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import { Offer } from 'src/app/views/offers/offers.interfaces';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from 'src/app/views/offers/services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit{
  @Output() apply = new EventEmitter<void>();
  @ViewChild('frame') frame: ElementRef;
  offer: Offer;
  
  constructor(private renderer: Renderer,
                private offersService: OffersService, 
                private route: ActivatedRoute,
                private location: Location){}

  ngOnInit(){
    this.route.params.subscribe(
      params => {
        this.offer = this.offersService.getOffer(params['id']);
        this.renderer.setElementStyle(this.frame.nativeElement, 'backgroundColor', this.offer.color);
      });
  }

  getMoney(): string{
    return this.offer.salary.lowerLimit + " - " + this.offer.salary.upperLimit + " PLN  net/month";
  }

  getAddress(): string{
    return this.offer.companyAddress.streetName 
              + " " 
              + this.offer.companyAddress.buildingNumber 
              + ", "
              +this.offer.companyAddress.city; 
  }

  onApplyClick(): void{
    this.apply.emit();
  }

  onBackClick(): void{
    this.location.back();
  }
}