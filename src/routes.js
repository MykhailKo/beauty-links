import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const Landing = lazy(() => import("./pages/Landing/Landing"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const UserProfile = lazy(() => import("./pages/UserProfile/UserProfile"));
const Bookings = lazy(() => import("./pages/UserProfile/Bookings/Bookings"));
const Achievements = lazy(() =>
  import("./pages/UserProfile/Achievements/Achievements")
);
const FaveMasters = lazy(() =>
  import("./pages/UserProfile/FaveMasters/FaveMasters")
);
const Settings = lazy(() => import("./pages/UserProfile/Settings/Settings"));
const MasterPage = lazy(() => import("./pages/MasterPage/MasterPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export default function getRoutes(isAuth) {
  const authRoutes = [
    <Route
      path="/user"
      key="/user"
      render={({ match: { url } }) => (
        <UserProfile>
          <Switch>
            <Route
              path={`${url}/achievements`}
              component={Achievements}
              exact
            />
            <Route path={`${url}/bookings`} component={Bookings} exact />
            <Route path={`${url}/settings`} component={Settings} exact />
            <Route path={`${url}/favourites`} component={FaveMasters} exact />
            <Redirect to={`${url}/achievements`} />
          </Switch>
        </UserProfile>
      )}
    />,
    <Route
      path="/master/:masterid"
      key="/master/:masterid"
      exact
      component={MasterPage}
    />,
  ];
  const nonAuthRoutes = [
    <Route path="/register" key="/register" component={Registration} />,
    // temporary route master page
    <Route
      path="/master/:masterid"
      key="/master/:masterid"
      exact
      component={MasterPage}
    />,
    <Route
      path="/user"
      key="/user"
      render={({ match: { url } }) => (
        <UserProfile>
          <Switch>
            <Route
              path={`${url}/achievements`}
              component={Achievements}
              exact
            />
            <Route path={`${url}/bookings`} component={Bookings} exact />
            <Route path={`${url}/settings`} component={Settings} exact />
            <Route path={`${url}/favourites`} component={FaveMasters} exact />
            <Redirect to={`${url}/achievements`} />
          </Switch>
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
