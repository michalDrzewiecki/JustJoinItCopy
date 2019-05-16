import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User, LoginUser, Technology } from '../shared.interfaces';
import { Offer } from '../../views/offers/offers.interfaces';
import { CookieService } from 'ngx-cookie-service';

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
    
    constructor(private http: HttpClient, private cookieService: CookieService){}
    
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
        return await this.http.get<Offer[]>(url).toPromise();
    }

    public isCookie():boolean{
        return this.cookieService.get(this.cookie)? true : false;
    }

    public getUser():string{
        return this.cookieService.get(this.cookieUser);
    }

    public logout(){
        this.cookieService.delete(this.cookieUser);
        this.cookieService.delete(this.cookie);
    }
}