import React, { Component } from 'react'
import styles from "./Test2.module.css";

export default class Test2 extends Component {
    render() {
        
        return (
            <div>
                <p className={ styles.redText }>My name is {this.props.name}</p>
                <p>I am {this.props.age}</p>              
            </div> 
        )
    }
}
