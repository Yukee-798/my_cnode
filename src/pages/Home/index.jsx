import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import axios from 'axios'
import PubSub from 'pubsub-js';


import MyList from '../../components/MyList'

export default class Home extends Component {

    state = {
        page: 1
    }

    // 订阅消息
    componentDidMount() {
        this.token = PubSub.subscribe('updatePage', (msg, page) => {

            this.setState({ page });
        });
    }

    // 取消订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        let type = this.props.match.params.category;
        PubSub.publish('updateListState', { isLoading: true });

        axios.get(' https://cnodejs.org/api/v1/topics', {
            params: {
                page: this.state.page,
                tab: type === 'all' ? '' : type,
                limit: 30
            }
        }).then(
            response => {
                let myData = response.data.data;
                let newListState = { data: myData, type, isLoading: false };
                // 请求成功通知 List 改变状态
                PubSub.publish('updateListState', newListState);
                
            },
            error => {
                let newListState = { data: [], err: error, type, isLoading: false };
                // 请求失败通知 List 改变状态
                PubSub.publish('updateListState', newListState);
            }
        );
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
                        <NavLink replace to="/home/ask">问答</NavLink>
                    </Menu.Item>
                </Menu>

                <MyList />

            </div>
        )
    }
}
