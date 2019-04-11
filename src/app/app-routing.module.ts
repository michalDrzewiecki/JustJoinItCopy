import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouterUrls, AppRoutes } from './app-routing.config';
import { AuthLoginComponent } from './views/auth/components';
import { OffersContentComponent, OfferDetailComponent, OffersListComponent} from './views/offers/components';
import { BrandsComponent } from './views/brands/components';

const routes: Routes = [
  { path: '', redirectTo: AppRouterUrls.DEFAULT, pathMatch: 'full' },
  { 
    path: AppRoutes.DEFAULT, component: OffersContentComponent,
    children:[
      {path: '', pathMatch: 'full', component: OffersListComponent},
      {path: AppRoutes.OFFER_TAG, component: OfferDetailComponent}
    ]
  },
  { path: AppRoutes.BRANDS, component: BrandsComponent },
  {
    path: AppRoutes.AUTH,
    children: [
      { path: '', pathMatch: 'full', redirectTo: AppRouterUrls.LOGIN },
      { path: AppRoutes.LOGIN, component: AuthLoginComponent }
    ]
  },
  {path: AppRoutes.ERROR, redirectTo: AppRouterUrls.DEFAULT}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
