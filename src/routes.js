import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const Landing = lazy(() => import("./pages/Landing/Landing"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const Login = lazy(() => import("./pages/Login/Login"));
const UserProfile = lazy(() => import("./pages/UserProfile/UserProfile"));
const Bookings = lazy(() => import("./pages/UserProfile/Bookings/Bookings"));
const Achievements = lazy(() =>
  import("./pages/UserProfile/Achievements/Achievements")
);
const FaveMasters = lazy(() =>
  import("./pages/UserProfile/FaveMasters/FaveMasters")
);
const Settings = lazy(() => import("./pages/UserProfile/Settings/Settings"));
const MasterBasics = lazy(() =>
  import("./pages/UserProfile/MasterBasics/MasterBasics")
);
const MasterCalendar = lazy(() =>
  import("./pages/UserProfile/MasterCalendar/MasterCalendar")
);
const MasterProfile = lazy(() =>
  import("./pages/UserProfile/MasterProfile/MasterProfile")
);
const MasterLocations = lazy(() =>
  import("./pages/UserProfile/MasterLocations/MasterLocations")
);
const MasterPage = lazy(() => import("./pages/MasterPage/MasterPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export default function getRoutes(isAuth, roles, registerIsOpen) {
  const authRoutes = [
    // <Route
    //   path="/user"
    //   key="/user"
    //   render={({ match: { url } }) => {
    //     return (
    //       <UserProfile type={!roles.includes("master") ? "client" : "master"}>
    //         {/* это роуты клиента */}
    //         {!roles.includes("master") ? (
    //           <Switch>
    //             <Route
    //               path={`${url}/achievements`}
    //               component={Achievements}
    //               exact
    //             />
    //             <Route path={`${url}/bookings`} component={Bookings} exact />
    //             <Route path={`${url}/settings`} component={Settings} exact />
    //             <Route
    //               path={`${url}/favourites`}
    //               component={FaveMasters}
    //               exact
    //             />
    //             <Redirect to={`${url}/achievements`} />
    //           </Switch>
    //         ) : (
    //           <Switch>
    //             <Route
    //               path={`${url}/masterbasics`}
    //               component={MasterBasics}
    //               exact
    //             />
    //             <Route
    //               path={`${url}/calendar`}
    //               component={MasterCalendar}
    //               exact
    //             />
    //             <Route path={`${url}/bookings`} component={Bookings} exact />
    //             <Route
    //               path={`${url}/services`}
    //               component={MasterBasics}
    //               exact
    //             />
    //             <Route
    //               path={`${url}/locations`}
    //               component={MasterLocations}
    //               exact
    //             />
    //             <Route
    //               path={`${url}/masterprofile`}
    //               component={MasterProfile}
    //               exact
    //             />
    //             <Route path={`${url}/settings`} component={Settings} exact />
    //             <Redirect to={`${url}/masterbasics`} />
    //           </Switch>
    //         )}
    //       </UserProfile>
    //     );
    //   }}
    // />,
    // <Route
    //   path="/master/:masterid"
    //   key="/master/:masterid"
    //   exact
    //   component={MasterPage}
    // />,
  ];
  const nonAuthRoutes = [
    <Route path="/register" key="/register" component={Registration} />,
    <Route path="/login" key="/login" component={Login} />,
    <Route
      path="/user"
      key="/user"
      render={({ match: { url } }) => {
        return (
          <UserProfile type={!roles.includes("master") ? "client" : "master"}>
            {/* это роуты клиента */}
            {!roles.includes("master") ? (
              <Switch>
                <Route
                  path={`${url}/achievements`}
                  component={Achievements}
                  exact
                />
                <Route path={`${url}/bookings`} component={Bookings} exact />
                <Route path={`${url}/settings`} component={Settings} exact />
                <Route
                  path={`${url}/favourites`}
                  component={FaveMasters}
                  exact
                />
                <Redirect to={`${url}/achievements`} />
              </Switch>
            ) : (
              <Switch>
                <Route
                  path={`${url}/masterbasics`}
                  component={MasterBasics}
                  exact
                />
                <Route
                  path={`${url}/calendar`}
                  component={MasterCalendar}
                  exact
                />
                <Route path={`${url}/bookings`} component={Bookings} exact />
                <Route
                  path={`${url}/services`}
                  component={MasterBasics}
                  exact
                />
                <Route
                  path={`${url}/locations`}
                  component={MasterLocations}
                  exact
                />
                <Route
                  path={`${url}/masterprofile`}
                  component={MasterProfile}
                  exact
                />
                <Route path={`${url}/settings`} component={Settings} exact />
                <Redirect to={`${url}/masterbasics`} />
              </Switch>
            )}
          </UserProfile>
        );
      }}
    />,
    <Route
      path="/master/:masterid"
      key="/master/:masterid"
      exact
      component={MasterPage}
    />,
  ];
  if (registerIsOpen) {
    authRoutes.push(
      <Route path="/register" key="/register" component={Registration} />
    );
  }
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
