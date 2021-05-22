import React, { Component } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default class ListItem extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (theme)=>(
                        <li style={{
                            color: theme
                        }}>{this.props.content}</li>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
