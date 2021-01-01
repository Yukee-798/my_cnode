import React, { Component } from 'react'
import { Tag } from 'antd';

export default class MyTag extends Component {
    render() {
        const { tab, good, top } = this.props.type;
        // 顶置 精华 tab
        // 1   1   share
        // 1   1   ask
        // 1   0   share
        // 1   0   ask
        // 0   1   share
        // 0   1   ask
        // 0   0   share
        // 0   0   ask



        //     <Tag color="green">顶置</Tag> 
        //    <Tag color="gray">分享</Tag> 
        //    <Tag color="gray">问答</Tag> 
        //    <Tag color="gold">精华</Tag>
        return (
            (top && good && tab === 'share') ? <span><Tag color="green">顶置</Tag><Tag color="gold">精华</Tag><Tag color="gray">分享</Tag></span> :
            (top && good && tab === 'ask') ? <span><Tag color="green">顶置</Tag><Tag color="gold">精华</Tag><Tag color="gray">问答</Tag></span> :
            (top && !good && tab === 'share') ? <span><Tag color="green">顶置</Tag><Tag color="gray">分享</Tag></span> :
            (top && !good && tab === 'ask') ? <span><Tag color="green">顶置</Tag><Tag color="gray">问答</Tag></span> :
            (!top && good && tab === 'share') ? <span><Tag color="gold">精华</Tag><Tag color="gray">分享</Tag></span> :
            (!top && !good && tab === 'ask') ? <span><Tag color="gray">问答</Tag></span> :
            (!top && !good && tab === 'share') ? <span><Tag color="gray">分享</Tag></span> :
            <span><Tag color="green">顶置</Tag><Tag color="gold">精华</Tag><Tag color="gray">问答</Tag></span> 
            
        )
    }
}
