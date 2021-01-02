import React, { Component } from 'react'
import { Avatar, Card } from 'antd';
import { EuroOutlined, GithubOutlined, CalendarOutlined } from '@ant-design/icons';
import axios from 'axios'


export default class User extends Component {
    
    state = {
        isLoading: true,
        data: {},
        err: ''
    }

    componentDidMount() {
        axios.get(`https://cnodejs.org/api/v1/user/${this.props.match.params.auther_id}`)
             .then(
                 response => {
                     this.setState({ isLoading: false, data: response.data.data });
                 },
                 error => {
                    this.setState({ isLoading: false, err: error })
                 }
             );
    }

    render() {
        if (!this.state.isLoading)
            var { avatar_url, loginname, create_at, score, githubUsername } = this.state.data

        // console.log(this.state);

        return (
            this.state.isLoading ? <Card loading={true}></Card> :
            this.state.err ? <div>err</div> :
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
