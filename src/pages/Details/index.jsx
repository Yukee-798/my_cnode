import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import MyTag from '../../components/MyTag'
import articleDetails from './data'

export default class Details extends Component {
    render() {

        // 获取文章 id
        // console.log(this.props.match.params);
        const { data, data: { title, create_at, author, visit_count, tab, content } } = articleDetails;
        return (
            <div className='details-warp'>
                <Card
                    title={
                        <div className='details-header'>
                            <div className='details-header-title'>
                                < MyTag type={data} />
                                <span style={{ fontSize: '22px', fontWeight: '700' }}>{title}</span>
                            </div>
                            <div className='details-header-description' style={{ fontSize: '10px', color: '#838383' }}>
                                <span> · 发布于 </span>
                                <span>
                                    <span>  {create_at.split('T')[0]}</span>
                                    <span>  {create_at.split('T')[1].slice(0, 5)}</span>
                                </span>
                                <span> · 作者 <Link to={`/user/${author.loginname}`}>{ author.loginname }</Link></span>
                                <span> · { visit_count } 次浏览</span>
                                <span> · 来自 { tab === 'share' ? '分享' : '问答' }</span>
                            </div>
                        </div>
                    }
                >
                    <div
                        dangerouslySetInnerHTML={
                            {
                                __html: content
                            }
                        }
                    >

                    </div>

                </Card>
            </div>
        )
    }
}
