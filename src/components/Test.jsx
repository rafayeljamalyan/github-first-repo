import React, { Component } from 'react'

export default class Test extends Component {
    render() {
        console.log( this.props );
        return (
            <div>
                Hello world
                {this.props.children()}
            </div>
        )
    }
}
