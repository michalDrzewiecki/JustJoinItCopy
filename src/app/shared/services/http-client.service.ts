import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, LoginUser } from '../shared.interfaces';
import { Router } from '@angular/router';

@Injectable()
export class HttpClientService{
    serverAddress: string = "http://localhost:5000";
    authorization: string = "/auth";
    registration: string = "/register";
    loginUrl: string = "/login";
    
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
        let response = await this.http.post(url, user).toPromise().catch((err: HttpErrorResponse) => {
            return err;
        });  
        return response;
    }
   
}