import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.listItems.map( (li,i) => (
                        <ListItem key={i} content={li} />
                    ))
                }                 
            </ul>
        )
    }
}
