import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd'
import MyTag from '../MyTag'
import data from './data';

export default class MyList extends Component {
    render() {
        return (
            <List 
                id="list"
                loading = {false}
                dataSource = {data.data}
                renderItem = {item => (
                    <List.Item>
                        <List.Item.Meta 
                            avatar={<Link to={`/user/${item.author.loginname}`}><Avatar size='large' shape='square' src={item.author.avatar_url} /></Link>}
                            title={
                                <div>
                                    <MyTag type={item}/>
                                    <Link to={`/details/${item.id}`}>{item.title}</Link>
                                </div>                              
                            }


                            description={
                                <span id='description'>
                                    <span id='date' style={{ fontSize: '10px' }}>
                                        <span>  {item.create_at.split('T')[0]}</span>
                                        <span>  {item.create_at.split('T')[1].slice(0, 5)}</span>
                                    </span>
                                    <span style={{ color: '#9e78c0', fontSize: '14px', fontWeight: 'bold' }}>{item.reply_count}</span>
                                    <span style={{ fontSize: '12px' }}>/{item.visit_count}</span>

                                    
                                    
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
