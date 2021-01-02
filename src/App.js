import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// import {} from 'antd';
// import PubSub from 'pubsub-js';
import 'antd/dist/antd.css';

import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

import Home from './pages/Home';
import Study from './pages/Study';
import About from './pages/About';

import User from './pages/User';
import Details from './pages/Details';

export default class App extends Component {

  componentDidMount() {
    // PubSub.publish('changeTopNavSelected', ['1']);
    // PubSub.publish('changeLeftNavSelected', ['1']);
  }

  render() {
    return (
      <div className="pageWarp">
          <MainHeader />
          <main className="main">
              <Switch>
                <Route path="/home/:category" component={Home} />
                <Route path="/study" component={Study} />
                <Route path="/about" component={About} />
                <Route path="/user/:auther_id" component={User} />
                <Route path="/details/:article_id" component={Details} />
                <Redirect to="/home/all" />
              </Switch>
          </main>
          <MainFooter />
      </div>
    )
  }
}
