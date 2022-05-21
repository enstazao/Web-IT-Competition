import React from "react";

//Dependencies
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

//Private Routes
import RouteLinks from "./private/RouteLinks";
import PrivateRoute from "./private/PrivateRoutes";

//styles and components
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Store from "./Store";
import Dashboard from "./components/Sidebar/pages/Dashboard/Dashboard";
import Profile from "./components/Sidebar/pages/Dashboard/Profile/Profile"
import Create from "./components/Sidebar/pages/Dashboard/Create/Create"

export default function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <RouteLinks path="/register" exact component={Register} />
          <RouteLinks path="/login" exact component={Login} />
          <PrivateRoute path='/dashboard/:page?' exact component={Dashboard}/>
          <PrivateRoute path='/createProfile' exact component={Profile} />
          <PrivateRoute path='/createEvent' exact component={Create} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
