import { Component } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {

  appRouterUrls = AppRouterUrls;

  constructor() {}
}