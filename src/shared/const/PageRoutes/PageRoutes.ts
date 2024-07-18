export const getRouteMain = () => "/";
export const getRouteProfiles = () => "/profiles";
export const getRouteProfileDetails = (id: string) => `/profiles/${id}`;

export enum AppRoutes {
  MAIN_PAGE = "main_page",
  PROFILE_PAGE = "profile_page",
  PROFILE_DETAILS_PAGE = "profile_details_page",
  NOT_FOUND_PAGE = "not_found_page",
}
