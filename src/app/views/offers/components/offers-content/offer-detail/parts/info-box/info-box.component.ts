import { Component, Input, ViewChild, ElementRef, Renderer, OnInit} from '@angular/core';


@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit{
    @Input() category: string;
    @Input() value: string;
    @Input() icon: string;
    @Input() color: string;
    @ViewChild('iconButton') iconButton: ElementRef;
    
    constructor(private renderer: Renderer){}

    ngOnInit(){
      this.renderer.setElementStyle(this.iconButton.nativeElement, 'color', this.color);
    }
}