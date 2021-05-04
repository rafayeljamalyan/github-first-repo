import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ``
        }
        this.onInput = this.onInput.bind(this);
    }
    onInput( e ) {
        this.setState({inputValue: e.target.value})
    }

    render() {
        return (
            <div className="row">
                
                <input type="text" onInput={this.onInput} name="" value={this.state.inputValue} id=""/>
                <p> {this.state.inputValue} </p>
            </div>
        )
    }
}
