import React, { Component } from 'react'
import List from './List';

class MyList extends Component {
    render() {  
        return (
            <div style={{
                color: this.props.randomColor
            }}>
                <h4> { this.props.listTitle } </h4>
                <List listItems={ this.props.listItems } />
            </div>
        )
    }
}

export default  MyList;
