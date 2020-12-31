import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {} from 'antd';
import 'antd/dist/antd.css'

import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

import Home from './pages/Home';
import Study from './pages/Study';
import About from './pages/About';

import User from './pages/User';
import Details from './pages/Details';

export default class App extends Component {
  render() {
    return (
      <div className="pageWarp">
          <MainHeader />
          <main className="main">
              <Switch>
                <Route path="/home/:id" component={Home} />
                <Route path="/study" component={Study} />
                <Route path="/about" component={About} />
                <Route path="/user" component={User} />
                <Route path="/details" component={Details} />
                <Redirect to="/home/all" />
              </Switch>
          </main>
          <MainFooter />
      </div>
    )
  }
}
