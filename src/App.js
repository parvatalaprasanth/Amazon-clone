import './App.css';
import Header from './Header';
import Home from './Home';
import SoloProduct from './SoloProduct';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import {auth} from "./firebase";
import React,{useEffect} from "react";
import {useStateValue} from "./StateProvider";
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js";
import Orders from "./Orders";
import Prime from "./Prime";

const promise=loadStripe("pk_test_51IfQQjSENfulLeatGneSjaEbwyvBZXXDEaomPBGz7oc90RQMcLiCzAfB3X3PFKPHLxUt9Mw45rMXkWPhsc9ZPTBh00m7Ov5phS");


function App() {

  const[{},dispatch]=useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
    <Router>
      <Header/>
      <Switch>
      <Route path="/login">
          <Login/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/orders">
          <Orders/>
        </Route>
        <Route path="/prime">
          <Prime/>
        </Route>
        <Route path="/payment">
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
        </Route>
        <Route path="/soloproduct">
          <SoloProduct/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
