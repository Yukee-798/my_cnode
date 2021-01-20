import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import axios from 'axios'
import MyTag from '../../components/MyTag'
import './index.scss'

export default class Details extends Component {
    state = {
        isLoading: true,
        data: {},
        err: ''
    }

    componentDidMount() {
        // 获取文章 id
        const id = this.props.match.params.article_id;

        axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
             .then(
                 response => {
                    // console.log(response.data.data);
                    this.setState({ data: response.data, isLoading: false })
                 },
                 error => {
                     this.setState({ err: error, isLoading: false })
                 }
             );
    }

    render() {

        if (!this.state.isLoading) {
            var { data, data: { title, create_at, author, visit_count, tab, content } } = this.state.data;
        }

        return (
            this.state.isLoading ? <Card loading={true}></Card> :
            this.state.err ? this.state.err :
            <div className='details-warp'>
                <Card
                    loading={this.state.isLoading}
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
