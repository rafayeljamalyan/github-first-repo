import React, { Component } from 'react';
import styles from './Loading.module.css';
import Loader from "react-loader-spinner";

export default class Loading extends Component {
    render() {
        return (
            <div className={styles.loadingContainer}>
                <Loader
                type="Puff"
                color="#FF0000"
                height={100}
                width={100}
                />                
            </div>
        )
    }
}
