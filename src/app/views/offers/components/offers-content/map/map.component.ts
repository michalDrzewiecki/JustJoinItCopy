import { Component, ViewChild, OnInit, NgZone} from '@angular/core';
import { latLng, tileLayer, circleMarker } from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { OffersService } from '../../../services';
import { Offer } from '../../../offers.interfaces';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit{
  @ViewChild('map') map;
  appRouterUrls;
  options;
  layers = [];
  offers: Offer[] = [];

  constructor(private offersService: OffersService, private router: Router, private zone: NgZone, private route: ActivatedRoute) {}
  
  ngOnInit(){
    this.appRouterUrls = this.offersService.getAppRouterUrls();
    this.offers = this.offersService.getOffers();
    for (let offer of this.offers){
      this.changeAddressIntoCoordinates(offer);
    }
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        })
      ],
      zoom: 6,
      center: latLng([ 52.237049, 19.017532 ])
    };
    
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
      this.createMarker(result[0], offer);
    }
  }

  createMarker(coordinates, offer: Offer){
    let newMarker = circleMarker([coordinates.y, coordinates.x], {
      color: offer.color,
      fillColor: offer.color,
      fillOpacity: 0.4,
      radius: 20,
    });
    newMarker.options.attribution=offer.routingTag;
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