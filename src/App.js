import React, { Component } from 'react';
import {} from 'antd';
import 'antd/dist/antd.css'


// import RouterIndex from './router/index'
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

export default class App extends Component {
  render() {
    return (
      <div className="pageWarp">
          <MainHeader />
          <MainFooter />
      </div>
    )
  }
}
