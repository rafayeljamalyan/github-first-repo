import React, { Component } from 'react'
import Hours from './Hours'
import Input from './Input'

export default class DaysAndHours extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            days:0
        }

        this.daysChange= this.daysChange.bind(this);
        this.hoursChange= this.hoursChange.bind(this);
    }

    daysChange( norValue ) {
        this.setState( { days: norValue } )
    }

    hoursChange( norValue ) {
        this.setState( { days: norValue /24 } ) 
    }

    render() {
        return (
            <div className="row">
                <Input onChange={ this.daysChange } value={ this.state.days } type="text" label="Days" name="days" id="days" />
                <Hours   days={ this.state.days } />
            </div>
        )
    }
}
