import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Layout, Menu, Icon, Divider, Button, Dropdown } from "antd";
import 'antd/dist/antd.css';



export default class MainHeader extends Component {
    render() {
        
        return (
            <Layout.Header>
                <div className="headerContainer">
                    <h1 id="logo">cNode</h1>
                    <Divider type="vertical" className="divider"/>
                    <Menu>
                        <Menu.Item>
                            
                        </Menu.Item>
                        <Menu.Item></Menu.Item>
                        <Menu.Item></Menu.Item>
                    </Menu>
                </div>
            </Layout.Header>
        )
    }
}
