import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute";

function App({ current }) {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Products} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <PrivateRoute exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
