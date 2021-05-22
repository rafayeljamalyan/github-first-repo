import React, { Component } from 'react';
import styles from './Forms.module.css';
import MyInput from './MyInput';

export default class Forms extends Component {
    constructor( props ) {
        super( props );

        this.state={
            username: "Armen",
            password: ""
        }

        this.submitForm = this.submitForm.bind( this );
    }

    submitForm( e ) {
        e.preventDefault();
        console.log({
            username: this.state.username,
            password: this.state.password
        });
    }

    valueChange( type, newValue ) {
        if ( type === `username` ) {
            this.setState({
                username: newValue
            })
        }
        else if ( type === `password` ) {
            this.setState({
                password: newValue
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm } className={styles.form} action="" >
                    <MyInput valueChange={( norValue )=>this.valueChange( 'username', norValue ) } value={ this.state.username }  type="text" label="Username" />
                    <MyInput valueChange={( norValue )=>this.valueChange( 'password', norValue ) } value={ this.state.password } type="password" label="Password" />
                    <input type="submit" value="Login"  />
                </form>
            </div>
        )
    }
}
