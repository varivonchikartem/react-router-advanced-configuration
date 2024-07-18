import React from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfiguration } from "../configuration/RouterConfiguration/RouterConfiguration";

interface AppRouterProps {}

export function AppRouter(props: AppRouterProps) {
  return (
    <React.Suspense fallback="Loading">
      <Routes>
        {Object.values(routerConfiguration).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </React.Suspense>
  );
}
