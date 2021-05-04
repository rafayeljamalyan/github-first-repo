import React, { Component } from 'react';
import { request } from '../providers/r.lib';
import { jsonplaceholder } from '../providers/constants';
 
export default class Users extends Component {
    constructor( props ){
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        request( jsonplaceholder + "users", "GET" )
            .then( data => {
                this.setState( { users: data } )
            })
            .catch( err => {
                console.error( err );
            }) 
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map( user => (
                        <p> { user.name } </p>
                    ))
                }
            </div>
        )
    }
}
