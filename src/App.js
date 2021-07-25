import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Discover from "./pages/discover/Discover";
import { auth } from "./auth/Firebase";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  /// Keep users logged in on page reloads
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <ProtectedRoute path="/" exact component={Home} isFetching={false} />
          <ProtectedRoute path="/movies" exact component={Movies} />
          <ProtectedRoute path="/series" exact component={Series} />
          <ProtectedRoute path="/profile" exact component={Profile} />
          <ProtectedRoute path="/watch" exact component={Watch} />
          <ProtectedRoute
            path="/discover/:type/:id"
            exact
            component={Discover}
          />

          <Route path="/login" exact component={Login} />

          <Route path="/register" exact component={Register} />

          {/*!user ? (
            <>
              <Route path="/login" exact component={Login} />

              <Route path="/register" exact component={Register} />
            </>
          ) : (
            <>
              <Route path="/" exact component={Home} user={user} />

              <Route path="/movies" exact component={Movies} />

              <Route path="/series" exact component={Series} />

              <Route path="/profile" exact component={Profile} />

              <Route path="/discover/:type/:id" exact component={Discover} />
              <Route path="/watch" exact component={Watch} />
            </>
          )*/}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
