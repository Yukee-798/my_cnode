import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home"
import Study from "../pages/Study"
import About from "../pages/About"
import User from "../pages/User"
import Details from "../pages/Details"


export default class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact render={ ()=> (
                    <Redirect to="/index/all" />
                )} />

                <Route path="/home/:id" component={Home} />
                <Route path="/study" component={Study} />
                <Route path="/about" component={About} />
                <Route path="/user" component={User} />
                <Route path="/details" component={Details} />

            </Switch>
        )
    }
}

