import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const Landing = lazy(() => import("./pages/Landing/Landing"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const UserProfile = lazy(() => import("./pages/UserProfile/UserProfile"));

export default function getRoutes(isAuth) {
  const authRoutes = [
    // <Route path="/admin" key="/" component={} />,
  ];
  const nonAuthRoutes = [
    <Route path="/register" key="/register" component={Registration} />,
  ];
  return (
    <Suspense fallback={<Preloader height="80vh" />}>
      <Switch>
        <Route path="/" key="/" exact component={Landing} />
        <Route
          path="/myprofile"
          key="/myprofile"
          exact
          component={UserProfile}
        />
        {isAuth ? authRoutes : nonAuthRoutes}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
}
