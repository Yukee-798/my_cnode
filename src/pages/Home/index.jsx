import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

import MyList from '../../components/MyList'
export default class Home extends Component {
    render() {

        return (
            <div className="warp">
                <Menu id="home_nav">
                    <Menu.Item>
                        <Link to="/home/all">全部</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/good">精华</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/share">分享</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/home/question">问答</Link>
                    </Menu.Item>
                </Menu>

                <MyList />
            </div>
        )
    }
}
