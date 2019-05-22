import { Component, OnInit, ViewChild, ElementRef, Renderer} from '@angular/core';
import { AuthService } from '../../services';
import {FormControl, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent implements OnInit {
  name: FormControl = new FormControl('', [Validators.required,]);
  surname: FormControl = new FormControl('', [Validators.required,]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required,]);
  repeatedPassword: FormControl = new FormControl('', [Validators.required,]);
  matcher = new AuthService.errorMatcher();
  appRouterUrls;
  @ViewChild('content') content: ElementRef;
  isVisible: boolean = false;
  constructor(private authService: AuthService, private renderer: Renderer) {}

  ngOnInit(){
    this.appRouterUrls = this.authService.getAppRouterUrls();
  }

  

  async onRegister(){
    let userName: string;
    let userSurname: string;
    let userEmail: string;
    let userPassword: string;
    this.name.value ? userName = this.name.value : this.name.markAsTouched();
    this.surname.value ? userSurname = this.surname.value : this.surname.markAsTouched();
    this.email.value && this.email.valid ? userEmail = this.email.value : this.email.markAsTouched();
    this.password.value ? userPassword = this.checkPasswords() : this.password.markAsTouched();
    this.repeatedPassword.value ? null : this.repeatedPassword.markAsTouched();
    if(userName && userSurname && userEmail && userPassword){
      let response = await this.authService.register(userName, userSurname, userEmail, userPassword);
      response instanceof HttpErrorResponse ? this.negativeResponse() : this.positiveResponse();
    }
  }

  checkPasswords():string{
    let response: string = "";
    this.password.value == this.repeatedPassword.value ? response = this.password.value : this.setPasswordsInputError();
    return response;
  }

  setPasswordsInputError():void{
    this.password.setValue("");
    this.repeatedPassword.setValue("");
    this.password.setErrors({'notTheSame': true});
    this.repeatedPassword.setErrors({'notTheSame': true});
  }

  positiveResponse():void{
    this.content.nativeElement.style.display = "none";
    this.isVisible = true;
  }

  negativeResponse():void{
    this.email.setValue("");
    this.email.setErrors({'emailExists':true});
  }
}
