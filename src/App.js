import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import Orders from "./Orders";
toast.configure()

function App() {

  const promise = loadStripe(
    "pk_test_51HQATQK66Aey3SKETaq8kXnnPwjOd21WMpt822zA2tDuDLbwbwnvnizGrrB7wYByNGpIxuYxAPAjPJPEqrBjVQPY00PRQriaTh"
  );

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    // it will only run once when the app component loads.

    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/payment">
              <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          
          <Route path="/">
            <Header/>
            <Home/>
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
