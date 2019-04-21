import { 
  Component, 
  Input, 
  ViewChild, 
  ElementRef,
  Renderer,
  AfterViewInit } from '@angular/core';

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
  hiddenElementName: string = "";

  constructor(private renderer: Renderer){}

  ngAfterViewInit(){
    this.renderer.setElementClass(this.parent.nativeElement.children[0], 'buttonChecked', true);
    this.renderer.setElementClass(this.hiddenElement.nativeElement, 'hideElement', true);
  }

  onMainButtonClicked(event: any){
    this.clickedButtonCheck(event.currentTarget.id);
  }

  onHiddenButtonClicked(event: any){
    this.hiddenElementName = event.currentTarget.id;
    this.clickedHiddenButton(event.currentTarget.id);
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