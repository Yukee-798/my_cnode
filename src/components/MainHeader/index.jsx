import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Divider } from "antd";
import 'antd/dist/antd.css';
import { HomeOutlined, BookOutlined, InfoCircleOutlined } from '@ant-design/icons';


export default class MainHeader extends Component {
    render() {
        
        return (
            <Layout.Header>
                <div className="headerContainer">
                    <h1 id="logo">cNode</h1>
                    <Divider type="vertical" className="divider"/>
                    <Menu 
                        mode="horizontal" 
                        id="nav"
                        theme="light"
                    >
                        <Menu.Item>
                            <Link to="/home"><HomeOutlined />首页</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link to="/study"><BookOutlined />教程</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link to="/about"><InfoCircleOutlined />关于</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </Layout.Header>
        )
    }
}
