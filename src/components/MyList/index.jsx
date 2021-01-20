import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd'
import PubSub from 'pubsub-js';
import MyTag from '../MyTag'
import './index.scss'


class MyList extends Component {

    state = {
        page: 1,
        isLoading: true,
        type: 'all',
        data: [],
        err: ''
    }


    // 订阅消息
    componentDidMount() {
        this.token = PubSub.subscribe('updateListState', (msg, stateObj) => {
            
            this.setState(stateObj)
        });
        // console.log('List 组件重新挂载了');
    }

    // 取消订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    offsetTime = (date, lastReplayTimeStr) => {
        let nowDate = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hours: date.getHours(),
            minutes: date.getMinutes()
        };

        let strArr = lastReplayTimeStr.split('T');

        let lastReplayDate = {
            year: parseInt(strArr[0].split('-')[0]),
            month: parseInt(strArr[0].split('-')[1]),
            day: parseInt(strArr[0].split('-')[2]),
            hours: parseInt(strArr[1].split(':')[0]),
            minutes: parseInt(strArr[1].split(':')[1])
        };

        let offset = {
            year: nowDate.year - lastReplayDate.year,
            month: nowDate.month - lastReplayDate.month,
            day: nowDate.day - lastReplayDate.day,
            hours: nowDate.hours - lastReplayDate.hours,
            minutes: nowDate.minutes - lastReplayDate.minutes
        }

        // 这里计算时间偏移量的逻辑有点问题！！
        return (
            offset.year > 0 ? offset.year + ' 年前' :
                offset.month > 0 ? offset.month + ' 个月前' :
                    offset.day > 0 ? offset.day + ' 天前' :
                        offset.hours > 0 ? offset.hours + ' 小时前' :
                            offset.minutes + ' 分钟前'
        );
    }


    render() {
        const { err ,isLoading, data } = this.state;

        return (
            err ? <div>{err}</div> :
            <List
                className = "main-list"
                loading = { isLoading }
                dataSource = { data }
                pagination = {
                    {
                        current: this.state.page,
                        pageSize: 20,
                        total: 1000,
                        onChange: (current) => {
                            this.setState({ page: current });
                            PubSub.publish('updatePage', current);
                        }
                    } 
                }
                renderItem = { item => (
                    // 这里判断 props
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Link to={`/user/${item.author.loginname}`}><Avatar size='large' shape='square' src={item.author.avatar_url} /></Link>}
                            title={
                                <div>
                                    <MyTag type={item} />
                                    {/* 点击标题，路由链接跳转到 details 然后传入相应的文章 id */}
                                    <Link to={`/details/${item.id}`}>{item.title}</Link>
                                </div>
                            }


                            description={
                                <span className='main-list-description'>

                                    <span className='main-list-description-replyandvisit'>
                                        <span style={{ color: '#9e78c0', fontSize: '14px', fontWeight: 'bold' }}>{item.reply_count}</span>
                                        <span style={{ fontSize: '12px' }}>/{item.visit_count}</span>
                                    </span>

                                    <span className='main-list-description-lastreply' style={{ fontSize: '10px' }}>
                                        <span>{this.offsetTime(new Date(), item.last_reply_at)}</span>
                                    </span>
                                </span>
                            }

                        />
                    </List.Item>
                )}
            >

            </List>
        )
    }
}

export default MyList;
