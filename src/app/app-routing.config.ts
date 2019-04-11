/**
 * Angular Router has problem with concatenated variables when building AOT bundle.
 * Working solution is to create variables with all the paths rather than importing from other modules and concatenating.
 * */

export const AppRoutes = {
  ERROR: '**',
  DEFAULT: 'offers',
  AUTH: 'auth',
  LOGIN: 'login',
  BRANDS: 'brands',
  OFFER_TAG: ':tag'
};

export const AppRouterLinks = {
  ERROR: [AppRoutes.ERROR],
  DEFAULT: [AppRoutes.DEFAULT],
  LOGIN: [AppRoutes.AUTH, AppRoutes.LOGIN],
  BRANDS: [AppRoutes.BRANDS],
  OFFER_TAG: [AppRoutes.OFFER_TAG]
};

export const AppRouterUrls = {
  ERROR: `/${AppRoutes.ERROR}`,
  DEFAULT: `/${AppRoutes.DEFAULT}`,
  LOGIN: `/${AppRoutes.AUTH}/${AppRoutes.LOGIN}`,
  BRANDS: `/${AppRoutes.BRANDS}`,
  OFFER_TAG: `/${AppRoutes.OFFER_TAG}`
};
