import React, { Component } from "react";
// import { NavLink, Link } from "react-router-dom";
import { Layout } from "antd";
import 'antd/dist/antd.css'



export default class MainFooter extends Component {
    render() {
        return (
            <Layout.Footer style={{color: "gray"}}>
                CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
            </Layout.Footer>
        )
    }
}
