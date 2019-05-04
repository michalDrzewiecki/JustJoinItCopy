/**
 * Angular Router has problem with concatenated variables when building AOT bundle.
 * Working solution is to create variables with all the paths rather than importing from other modules and concatenating.
 * */

export const AppRoutes = {
  ERROR: '**',
  OFFERS: 'offers',
  AUTH: 'auth',
  LOGIN: 'login',
  REGISTER: 'register',
  BRANDS: 'brands',
};

export const AppRouterLinks = {
  ERROR: [AppRoutes.ERROR],
  OFFERS: [AppRoutes.OFFERS],
  LOGIN: [AppRoutes.AUTH, AppRoutes.LOGIN],
  REGISTER: [AppRoutes.AUTH, AppRoutes.REGISTER],
  BRANDS: [AppRoutes.BRANDS],
};

export const AppRouterUrls = {
  ERROR: `/${AppRoutes.ERROR}`,
  OFFERS: `/${AppRoutes.OFFERS}`,
  LOGIN: `/${AppRoutes.AUTH}/${AppRoutes.LOGIN}`,
  REGISTER: `/${AppRoutes.AUTH}/${AppRoutes.REGISTER}`,
  BRANDS: `/${AppRoutes.BRANDS}`
};
