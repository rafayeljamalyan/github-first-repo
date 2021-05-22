import React, { Component } from 'react';

export default function RandomColor ( MyOtherComponent ) {
    class MyComponent extends Component {
        getRandomColor() {
            const hexItems = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
            let color = `#`;

            for ( let i = 0; i < 6; i++ ) {
                color += hexItems[ Math.round( Math.random() * hexItems.length ) ];
            }
            return color;
        }

        render() {
            return  <MyOtherComponent randomColor={ this.getRandomColor() } { ...this.props } />;
        }
    }

    return MyComponent;
}
