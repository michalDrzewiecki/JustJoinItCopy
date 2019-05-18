import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouterUrls, AppRoutes } from './app-routing.config';
import { AuthLoginComponent, AuthRegisterComponent } from './views/auth/components';
import { OffersContentComponent, OfferDetailComponent, OffersListComponent} from './views/offers/components';
import { BrandsComponent } from './views/brands/components';
import { OffersResolver } from './resolvers/offers-resolver';


const route = [{path: '', pathMatch: 'full', component: OffersListComponent}];

const routes: Routes = [
  { path: '', redirectTo: AppRouterUrls.OFFERS, pathMatch: 'full'},
  { path: AppRoutes.OFFERS, 
      component: OffersContentComponent, 
      resolve: { offers: OffersResolver},
      children:[
        {path: '', pathMatch: 'full', component: OffersListComponent },
        {path: ':id', component: OfferDetailComponent } 
    ]
  },
  {
    path: AppRoutes.AUTH,
    children: [
      { path: '', pathMatch: 'full', redirectTo: AppRouterUrls.LOGIN },
      { path: AppRoutes.LOGIN, component: AuthLoginComponent },
      { path: AppRoutes.REGISTER, component: AuthRegisterComponent }
    ]
  },
  { path: AppRoutes.BRANDS, component: BrandsComponent },
  { path: ':city', 
      component: OffersContentComponent,
      children: route,
      resolve: { offers: OffersResolver},
  },
  { path: ':city/:technology',
      component: OffersContentComponent,
      children: route,
      resolve: { offers: OffersResolver},
  },
  { path: ':city/:technology/:level',
      component: OffersContentComponent,
      children: route,
      resolve: { offers: OffersResolver}, 
  },
  { path: ':city/:technology/:level/:salary', 
      component: OffersContentComponent,
      children: route,
      resolve: { offers: OffersResolver}, 
  },
  { path: AppRoutes.ERROR, redirectTo: AppRouterUrls.OFFERS }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    OffersResolver
  ]
})
export class AppRoutingModule { }
