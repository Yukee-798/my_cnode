import React, { Component } from 'react'
import { Card } from 'antd'

import data from './data'


export default class Study extends Component {
    render() {
        return (
            <div className='study-warp'>
                {
                    data.map((item) => {
                        return (
                            <Card
                                title={item.title}
                            >
                                <div
                                    dangerouslySetInnerHTML={
                                        {
                                            __html: item.content
                                        }
                                    }
                                >
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}
