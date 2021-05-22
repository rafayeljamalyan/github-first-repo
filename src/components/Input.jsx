import React, { Component } from 'react'

export default class Input extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            value: this.props.value
        }

        this.changeValue = this.changeValue.bind( this );
    }

    componentWillReceiveProps( newProps ) {
        this.setState( { value: newProps.value } )
    }

    changeValue( e ) {
        this.setState( { value: e.target.value } )
        this.props.onChange( e.target.value );
    }

    componentDidUpdate(  ) {
        // console.log( this.state.value );
    }

    render() {
        const { id, label, type, name } = this.props;

        return (
            <div className="col-6"> 
                <label htmlFor={id}>{label}</label>
                <input onInput={ this.changeValue } value={ this.state.value } type={ type } name={name} id={id} />
                <p> Current value is : { this.state.value } </p>
            </div>
        )
    }
}
