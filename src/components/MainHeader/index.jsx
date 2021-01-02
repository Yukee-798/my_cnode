import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Layout, Menu, Divider } from "antd";
// import PubSub from 'pubsub-js';

import 'antd/dist/antd.css';
import { HomeOutlined, BookOutlined, InfoCircleOutlined } from '@ant-design/icons';


export default class MainHeader extends Component {
    // state = {
    //     selectedKeys: []
    // }

    // // 订阅消息
    // componentDidMount() {
    //     this.token = PubSub.subscribe('changeTopNavSelected', (msg, selectedKeys) => {
    //         this.setState({ selectedKeys });
    //         console.log(selectedKeys);
    //     });
    // }

    render() {
        return (
            <Layout.Header id="header">
                <h1 id="logo"><Link to='/home'>CNode</Link></h1>
                <Divider type="vertical" className="divider"/>

                <Menu 
                    mode="horizontal" 
                    id="nav"
                    theme="light"
                    defaultSelectedKeys={['1']}	
                >
                    <Menu.Item key="1">
                        <NavLink replace to="/home"><HomeOutlined />首页</NavLink>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <NavLink replace to="/study"><BookOutlined />教程</NavLink>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <NavLink replace to="/about"><InfoCircleOutlined />关于</NavLink>
                    </Menu.Item>
                </Menu>
            </Layout.Header>
        )
    }
}
