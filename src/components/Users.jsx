import React, { Component } from 'react';
import { request } from '../providers/r.lib';
import { jsonplaceholder } from '../providers/constants';
import Loading from './Loading';
 
export default class Users extends Component {
    constructor( props ){
        super(props);

        this.state = {
            users: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        try {
            const users = await request( jsonplaceholder + "users", "GET" );
            this.setState({users, isLoaded: true});
        }
        catch( err ) {
            console.error( err );
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoaded ?
                        this.state.users.map( (user,i) => (
                            <p key={i} > { user.name } </p>
                        ))
                        :
                    <Loading />

                }                
            </div>
        )
    }
}
