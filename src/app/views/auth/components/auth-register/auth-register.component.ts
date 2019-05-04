import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent implements OnInit {
  appRouterUrls;
  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.appRouterUrls = this.authService.getAppRouterUrls();
  }
}
