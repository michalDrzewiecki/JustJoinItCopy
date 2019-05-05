import { 
  Component, 
  Input, 
  ViewChild, 
  ElementRef,
  Renderer,
  AfterViewInit } from '@angular/core';
import { MyParams } from 'src/app/shared/shared.enums';
import { NavigationService } from 'src/app/shared/services';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checked-button-list',
  templateUrl: './checked-button-list.component.html',
  styleUrls: ['./checked-button-list.component.scss'],
})
export class CheckedButtonListComponent implements AfterViewInit{
  @ViewChild('parent') parent: ElementRef;
  @ViewChild('hiddenElement', {read: ElementRef}) hiddenElement: ElementRef;
  @Input() mainArray: string[];
  @Input() hiddenArray: string[];
  @Input() paramType: MyParams;
  hiddenElementName: string = "";
  subscription: Subscription;

  constructor(private renderer: Renderer, private navigationService: NavigationService, private router: Router){}

  ngAfterViewInit(){
    this.renderer.setElementClass(this.parent.nativeElement.children[0], 'buttonChecked', true);
    this.renderer.setElementClass(this.hiddenElement.nativeElement, 'hideElement', true);
    this.subscription = this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd ){
        this.setInitialButton(this.navigationService.checkParam(this.router, this.paramType));
      }
    });
  }

  setInitialButton(value: string):void{
    if(value != null){
      for(let main of this.mainArray){
        if(value == main){
          this.clickedButtonCheck(value);
          return;
        }
      }
      for(let hidden of this.hiddenArray){
        if(value == hidden){
          this.hiddenElementName = value;
          this.clickedHiddenButton(value);
          return;
        }
      }
      this.clickedButtonCheck(this.navigationService.DEFAULT_PARAM);
    }
    else{
      this.clickedButtonCheck(this.navigationService.DEFAULT_PARAM);
    }
  }

  onMainButtonClicked(event: any){
    this.clickedButtonCheck(event.currentTarget.id);
    this.navigationService.setParam(this.router, this.paramType, event.currentTarget.id);
  }

  onHiddenButtonClicked(event: any){
    this.hiddenElementName = event.currentTarget.id;
    this.clickedHiddenButton(event.currentTarget.id);
    this.navigationService.setParam(this.router, this.paramType, event.currentTarget.id);
  }

  clickedHiddenButton(id: string):void{
    this.renderer.setElementClass(this.hiddenElement.nativeElement, 'hideElement', false);
    this.hiddenElement.nativeElement.id = id;
    this.clickedButtonCheck(id);
  }

  clickedButtonCheck(id: string):void{
    let parent = this.parent.nativeElement.children;
    Array.prototype.forEach.call(parent, element=>{
      this.renderer.setElementClass(element, 'buttonChecked', false);
      if(element.id == id){
        this.renderer.setElementClass(element, 'buttonChecked', true);
      }
    });
  }
}