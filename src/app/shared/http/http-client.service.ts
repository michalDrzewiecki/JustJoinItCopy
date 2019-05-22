import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, LoginUser} from '../shared.interfaces';
import { Offer } from '../../views/offers/offers.interfaces';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppRouterUrls } from 'src/app/app-routing.config';
import { MyParams } from '../shared.enums';

@Injectable()
export class HttpClientService{
    cookie: string = "tokenCookie";
    cookieUser: string = "userCookie"
    serverAddress: string = "http://localhost:5000";
    authorization: string = "/auth";
    registration: string = "/register";
    loginUrl: string = "/login";
    staticData: string = "/staticData";
    offers: string = "/offers";
    update: string = "/update";

    defaultParams: string[] = ["all", "all", "all", "all"];
    params: string[] = this.defaultParams;

    appRouterUrls;
    
    constructor(private http: HttpClient, 
                    private cookieService: CookieService,
                    private router: Router){}
    
    async register(user: User): Promise<any>{
        let url: string = this.serverAddress + this.authorization + this.registration;
        let response = await this.http.post(url, user).toPromise().catch((err: HttpErrorResponse) => {
            return err;
        });  
        return response;
    }

    async login(user: LoginUser): Promise<any>{
        let url: string = this.serverAddress + this.authorization + this.loginUrl;
        let response = await this.http.post(url, user)
            .toPromise().catch((err: HttpErrorResponse) => {
                return err;
            });
        if(!(response instanceof HttpErrorResponse)){
            let data:{user: User, token:{expiresIn: number, token: string}} = <{user: User, token:{expiresIn: number, token: string}}>response.valueOf();
            this.cookieService.set(this.cookie, data.token.token);
            this.cookieService.set(this.cookieUser, data.user.name + " " + data.user.surname);
        }
        return response;
    }  

    async loadOffers(): Promise<Offer[]>{
        let url: string = this.serverAddress + this.staticData + this.offers;
        if(this.isCookie()){
            this.params.push(this.getToken());
        }
        return await this.http.post<Offer[]>(url, this.params).toPromise();
    }

    async updateCoordinates(offer: Offer){
        let url: string = this.serverAddress + this.staticData + this.update;
        let param: {routingTag: string, yCoordinate: number, xCoordinate: number} = {
            routingTag: offer.routingTag,
            yCoordinate: offer.yCoordinate,
            xCoordinate: offer.xCoordinate
        }
        return await this.http
            .post<{routingTag: string, yCoordinate: number, xCoordinate: number}>(url, param).toPromise();
    }

    public isCookie():boolean{
        return this.cookieService.get(this.cookie)? true : false;
    }

    private getToken(): string{
        return this.cookieService.get(this.cookie);
    }

    public getUser():string{
        return this.cookieService.get(this.cookieUser);
    }

    public logout():void{
        console.log("jestem");
        this.cookieService.delete(this.cookieUser);
        this.cookieService.delete(this.cookie);
        this.router.navigateByUrl(AppRouterUrls.LOGIN);
    }

    public setParams(params: string[]):void{
        this.params = params;
        if(this.params[MyParams.salary]!="all"){
            this.params[MyParams.salary] = params[MyParams.salary]
                                                .substring(0, params[MyParams.salary].length-1);
            this.params[MyParams.salary] = String(+this.params[MyParams.salary] * 1000);
        }
    }

}