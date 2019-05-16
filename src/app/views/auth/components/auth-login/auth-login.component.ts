import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit{
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);

  matcher = new AuthService.errorMatcher();
  appRouterUrls;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    this.appRouterUrls = this.authService.getAppRouterUrls();
  }

  async onLogin(){
    let userEmail: string;
    let userPassword: string;
    this.email.value && this.email.valid ? userEmail = this.email.value : this.email.markAsTouched();
    this.password.value ? userPassword = this.password.value : this.password.markAsTouched();
    if(userEmail && userPassword){
      let response = await this.authService.login(userEmail, userPassword);
      response instanceof HttpErrorResponse ? this.negativeResponse() : this.positiveResponse();
    }
  }

  negativeResponse():void{
    this.email.setValue("");
    this.password.setValue("");
    this.email.setErrors({'wrongData': true});
    this.password.setErrors({'wrongData': true});
  }

  positiveResponse():void{
    this.router.navigateByUrl(this.appRouterUrls.OFFERS);
  }


}
