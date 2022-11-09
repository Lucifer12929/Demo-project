import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "antd/dist/antd.css";
import ActivationEmail from "./components/activateemail";
import Login from "./components/login";
import Register from "./components/register";
import axios from "axios";
import Home from './pages/Home/Home';
import {
  dispatchLogin,
  dispatchGetUser,
  fetchUser,
} from "./redux/action/authAction";

import NotFound from "./utils/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";


function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post("/user/refresh_token", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());
        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);
  return (
    <>
      <div className="main">
        <Router>
          <>
            <Switch>
              <Route path="/" exact component={Home} />
              
              <Route
                exact
                path="/login"
                component={isLogged ? NotFound : Login}
              />
              <Route
                exact
                path="/register"
                component={isLogged ? NotFound : Register}
              />
              <Route
                exact
                path="/contact"
                component={isLogged ? NotFound : Contact}
              />
              <Route
                exact
                path="/user/activate/:activation_token"
                component={ActivationEmail}
              />
              <Route component={NotFound} />
            </Switch>
          </>
        </Router>
        
      </div>
    </>
  );
}

export default App;