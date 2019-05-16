import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User, LoginUser } from '../shared.interfaces';
import { Offer } from '../../views/offers/offers.interfaces';
import { Router } from '@angular/router';

@Injectable()
export class HttpClientService{
    serverAddress: string = "http://localhost:5000";
    authorization: string = "/auth";
    registration: string = "/register";
    loginUrl: string = "/login";
    staticData: string = "/staticData";
    offers: string = "/offers";

    actualUser: User = null;
    
    constructor(private http: HttpClient, private router: Router){}
    
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
        console.log(response);
        let data:{user: User, token:{expiresIn: number, token: string}} = <{user: User, token:{expiresIn: number, token: string} }>response.valueOf();
        console.log(data.token.token);
        return response;
    }  

    async loadOffers(): Promise<Offer[]>{
        let url: string = this.serverAddress + this.staticData + this.offers;
        return await this.http.get<Offer[]>(url).toPromise();
    }
}