import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfileDetailsPage } from "@/pages/ProfileDetailsPage";
import { ProfilePage } from "@/pages/ProfilePage";
import {
  AppRoutes,
  getRouteMain,
  getRouteProfileDetails,
  getRouteProfiles,
} from "@/shared/const/PageRoutes/PageRoutes";
import { RouteProps } from "react-router-dom";

export const routerConfiguration: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN_PAGE]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.PROFILE_PAGE]: {
    path: getRouteProfiles(),
    element: <ProfilePage />,
  },
  [AppRoutes.PROFILE_DETAILS_PAGE]: {
    path: getRouteProfileDetails(":id"),
    element: <ProfileDetailsPage />,
  },
  [AppRoutes.NOT_FOUND_PAGE]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
