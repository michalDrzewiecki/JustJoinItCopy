import { Component, ViewChild, OnInit, NgZone, OnDestroy} from '@angular/core';
import { latLng, tileLayer, CircleMarker, marker, divIcon } from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { OffersService } from '../../../services';
import { Offer } from '../../../offers.interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClientService } from 'src/app/shared/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy{
  @ViewChild('map') map;
  appRouterUrls;
  options;
  layers = [];
  offers: Offer[] = [];
  offerSubscription: Subscription;
  lastMarker: CircleMarker;

  constructor(private offersService: OffersService, 
              private router: Router, 
              private zone: NgZone, 
              private route: ActivatedRoute,
              private httpClientService: HttpClientService) {}
  
  ngOnInit(){
    this.offerSubscription = this.offersService.hoveredOfferChanged.subscribe((offer: Offer)=>{
      if(offer != null){
        for(let marker of this.layers){
          if(marker.options.attribution == offer.routingTag){
            this.lastMarker = marker;
            marker.openPopup();
          } 
        }
      }
      else{
        if(this.lastMarker != null){
          this.lastMarker.closePopup();
        }
      }
    });
    this.appRouterUrls = this.offersService.getAppRouterUrls();
    this.offers = this.offersService.getOffers();
    for (let offer of this.offers){
      if(!offer.isAddressTransformed){
        this.changeAddressIntoCoordinates(offer);
      }
      else{
        this.createMarker({y: offer.yCoordinate, x: offer.xCoordinate}, offer);
      }
      
    }
    this.options = {
      attributionControl: false, 
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        })
      ],
      zoom: 6,
      center: latLng([ 52.237049, 19.017532 ])
    };
  }

  ngOnDestroy(){
    this.offerSubscription.unsubscribe();
  }

  async changeAddressIntoCoordinates(offer: Offer){
    const provider = new OpenStreetMapProvider();
    let result ={};
    let addressQuery: string;
    addressQuery = offer.companyAddress.streetName 
                    + " " 
                    + offer.companyAddress.buildingNumber 
                    + " " + offer.companyAddress.city; 
    result = await provider.search({ query: addressQuery });
    if(result[0] != null){
      offer.yCoordinate = result[0].y;
      offer.xCoordinate = result[0].x;
      this.httpClientService.updateCoordinates(offer);
      this.createMarker(result[0], offer);
    }
  }

  createMarker(coordinates, offer: Offer){
    let htmlImage = "<img style='border-radius:50%; border: 1px solid black' height='45px' width='45px' src='"+ offer.companyLogo + "'/>";
    let myIcon = divIcon({
      html: htmlImage,
      iconAnchor: [+22, +22],
      className: 'dummyClass'
    });
    let newMarker = marker([coordinates.y, coordinates.x]);
    newMarker.options.attribution = offer.routingTag;
    newMarker.options.icon = myIcon;
    const popup: string = "<center><b>" 
                            + offer.position 
                            + "</b>"
                            + "</br><font color='green'>"
                            + offer.salary.lowerLimit 
                            + " - " 
                            + offer.salary.upperLimit 
                            + "</font></br>"
                            + offer.companyName
                            +"</center>"; 
    newMarker.bindPopup(popup);
    newMarker.on('mouseover', function(){
      this.openPopup();
    })
    newMarker.on('mouseout', function(){
      this.closePopup();
    })
    newMarker.on('click', e=>{
      let path: string = '/' + this.appRouterUrls.OFFERS + "/" + offer.routingTag;  
      this.zone.run(()=>{this.router.navigateByUrl(path)});
    });

    this.layers.push(newMarker);
  }
}