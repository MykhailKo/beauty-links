import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const Landing = lazy(() => import("./pages/Landing/Landing"));
const Registration = lazy(() => import("./pages/Registration/Registration"));

export default function getRoutes(isAuth) {
  const authRoutes = [
    // <Route path="/admin" key="/" component={} />,
  ];
  const nonAuthRoutes = [
    <Route path="/register" key="/register" component={Registration} />,
  ];
  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route path="/" key="/" exact component={Landing} />
        {isAuth ? authRoutes : nonAuthRoutes}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
}
