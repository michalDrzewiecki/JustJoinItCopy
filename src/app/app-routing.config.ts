/**
 * Angular Router has problem with concatenated variables when building AOT bundle.
 * Working solution is to create variables with all the paths rather than importing from other modules and concatenating.
 * */

export const AppRoutes = {
  ERROR: '**',
  OFFERS: 'offers',
  AUTH: 'auth',
  LOGIN: 'login',
  BRANDS: 'brands',
  DEFAULT_PARAM: 'all'
};

export const AppRouterLinks = {
  ERROR: [AppRoutes.ERROR],
  OFFERS: [AppRoutes.OFFERS],
  LOGIN: [AppRoutes.AUTH, AppRoutes.LOGIN],
  BRANDS: [AppRoutes.BRANDS],
};

export const AppRouterUrls = {
  ERROR: `/${AppRoutes.ERROR}`,
  OFFERS: `/${AppRoutes.OFFERS}`,
  LOGIN: `/${AppRoutes.AUTH}/${AppRoutes.LOGIN}`,
  BRANDS: `/${AppRoutes.BRANDS}`
};
