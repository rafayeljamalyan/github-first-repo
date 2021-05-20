import React, { Component } from 'react'

export default class MyInput extends Component {
    constructor( props ) {
        super(props );

        this.state = {
            currentValue: props.value
        }

        this.imTertik = React.createRef();

        this.onInputChange = this.onInputChange.bind( this );
    }

    onInputChange( e ) {
        this.setState( prevState => ({
            currentValue: e.target.value
        }) )
        this.props.valueChange( e.target.value )
    }

    componentDidMount() {
        setTimeout(()=> {
            console.log( this.imTertik.current.getAttribute( "type" ) );
        }, 3000)
    }

    render() {
        const { label, type } = this.props;
        return (
            <div>
                <label htmlFor=""> { label } </label>
                <input 
                    ref={this.imTertik}
                    value={ this.state.currentValue }
                    type={ type } 
                    onInput={this.onInputChange} />
            </div>
        )
    }
}
