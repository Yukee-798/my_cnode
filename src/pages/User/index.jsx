import React, { Component } from 'react'
import { Avatar, Card } from 'antd';
import { EuroOutlined, GithubOutlined, CalendarOutlined } from '@ant-design/icons';

import usersInfo from './data'

export default class User extends Component {
    render() {
        const { avatar_url, loginname, create_at, score, recent_topics, githubUsername } = usersInfo.data;
        console.log(this.props.match.params);

        return (
            <div className='user-warp'>
                <Card
                    title={
                        <div>
                            <div className='user-avatar-warp'>
                                <Avatar
                                    className='user-avatar'
                                    src={avatar_url}
                                />
                                <div className='username'>{ loginname }</div>
                            </div>

                            <div className='user-description'>
                                <div className='user-description-score user-description-item'>
                                    <EuroOutlined className='user-description-icon' />
                                    <span>{score} 积分</span>
                                </div>

                                <div className='user-description-github user-description-item'>
                                    <GithubOutlined className='user-description-icon' />
                                    <a href={`https://github.com/${ githubUsername }`}>@{ githubUsername }</a>
                                </div>

                                <div className='user-description-createtime user-description-item'>
                                    <CalendarOutlined className='user-description-icon' />
                                    <span>加入于 {create_at.split('T')[0]}</span> 
                                </div>
                            </div>
                        </div>
                    }
                >

                </Card>

            </div>
        )
    }
}
