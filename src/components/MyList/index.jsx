import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd'
import MyTag from '../MyTag'
import allArticleInfo from './data';

export default class MyList extends Component {

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

    filterData = (category) => {
        let newInfoArr = allArticleInfo.data.filter((item) => {
            return (category === 'good' && item.good) || item.tab === category;
        });
        return newInfoArr;
    }

    render() {
        const category = this.props.params.category;

        let infoArr = allArticleInfo.data;
        // 数据过滤
        if (category === 'share' || category === 'question' || category === 'good') {
            
            switch (category) {
                case 'share':
                    infoArr = this.filterData('share')
                break;

                case 'question':
                    infoArr = this.filterData('ask')
                break;

                case 'good':
                    infoArr = this.filterData('good')
                break;

                default:
                    infoArr = allArticleInfo.data;
            }
        }

        console.log(infoArr);
        

        return (
            <List
                id="list"
                loading={false}
                dataSource={infoArr}
                renderItem={item => (
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
                                <span className='list-description'>

                                    <span className='list-description-replyandvisit'>
                                        <span style={{ color: '#9e78c0', fontSize: '14px', fontWeight: 'bold' }}>{item.reply_count}</span>
                                        <span style={{ fontSize: '12px' }}>/{item.visit_count}</span>
                                    </span>

                                    <span className='list-description-lastreply' style={{ fontSize: '10px' }}>
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
