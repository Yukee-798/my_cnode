import React, { Component } from 'react'
import { List } from 'antd'

export default class MyList extends Component {
    render() {
        return (
            <List 
                id="list"
                loading = {false}
                // dataSource = {data}
                renderItem = {item => (
                    <List.Item>

                    </List.Item>
                )}
            >

            </List>
        )
    }
}
