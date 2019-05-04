import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit{
  appRouterUrls;
  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.appRouterUrls = this.authService.getAppRouterUrls();
  }
}
