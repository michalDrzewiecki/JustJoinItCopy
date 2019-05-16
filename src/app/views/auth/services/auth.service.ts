import { Injectable} from '@angular/core';
import { NavigationService, HttpClientService } from 'src/app/shared/services';
import { User, LoginUser } from 'src/app/shared/shared.interfaces';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  constructor(private navigationService: NavigationService, private httpClientService: HttpClientService) {}

  getAppRouterUrls(){
    return this.navigationService.getAppRouterUrls();
  }

  static errorMatcher = class implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }

  async register(name: string, surname: string, email: string, password: string): Promise<any>{
    let user: User = {name: name, surname: surname, email: email, password: password};
    let response = await this.httpClientService.register(user);
    return response;
  }

  async login(email: string, password: string): Promise<any>{
    let user: LoginUser = {email: email, password: password};
    let response = await this.httpClientService.login(user);
    return response;
  }

}
