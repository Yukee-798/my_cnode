import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'

import MyList from '../../components/MyList'

export default class Home extends Component {
    render() {

        // console.log(this.props.match.params);
        return (
            <div className="warp">
                <Menu id="home_nav">
                    <Menu.Item>
                        <NavLink replace to="/home/all">全部</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink replace to="/home/good">精华</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink replace to="/home/share">分享</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink replace to="/home/question">问答</NavLink>
                    </Menu.Item>
                </Menu>

                <MyList params={this.props.match.params}/>

            </div>
        )
    }
}
