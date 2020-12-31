import React, { Component } from 'react'
import { Tag } from 'antd';

export default class MyTag extends Component {
    render() {
        const { tab, good, top } = this.props.type;
        return (
            top ? <Tag color="green">顶置</Tag> : 
            good ? <Tag color="gray">分享</Tag> :
            tab === 'ask' ? <Tag color="gray">问答</Tag> :
            <Tag color="gold">精华</Tag>
        )
    }
}
