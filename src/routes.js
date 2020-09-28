import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const Landing = lazy(() => import("./pages/Landing/Landing"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const UserProfile = lazy(() => import("./pages/UserProfile/ClientProfile"));
const Bookings = lazy(() => import("./pages/UserProfile/Bookings/Bookings"));
const Achievements = lazy(() =>
  import("./pages/UserProfile/Achievements/Achievements")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export default function getRoutes(isAuth) {
  const authRoutes = [];
  const nonAuthRoutes = [
    <Route path="/register" key="/register" component={Registration} />,
    <Route
      path="/user"
      key="/user"
      render={({ match: { url } }) => (
        <UserProfile>
          <Route path={`${url}/achievements`} component={Achievements} />
          <Route path={`${url}/bookings`} component={Bookings} />
          <Route path={`${url}/settings`} component={"Settings"} />
          <Route path={`${url}/favourites`} component={"Favourite"} />
        </UserProfile>
      )}
    />,
  ];
  return (
    <Suspense fallback={<Preloader height="80vh" />}>
      <Switch>
        <Route path="/" key="/" exact component={Landing} />

        {isAuth ? authRoutes : nonAuthRoutes}
        <Route path="/404" key="/404" component={NotFound} />

        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}
