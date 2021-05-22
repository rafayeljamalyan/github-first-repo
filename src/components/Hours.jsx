import React, { Component } from 'react'
import Input from './Input'

export default class Hours extends Component {

    constructor(props) {
        super( props );
    }

    render() {
        return (
            <div>
                <Input onChange={ this.props.onChange } value={ this.props.days * 24 }  type="text" label="Hours" name="hours" id="hours" />                
            </div>
        )
    }
}
