import { Injectable} from '@angular/core';
import { NavigationService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  constructor(private navigationService: NavigationService) {}

  getAppRouterUrls(){
    return this.navigationService.getAppRouterUrls();
  }

}
