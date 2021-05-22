import React, { Component } from 'react';

export default function ( MyOtherComponent ) {
    class MyComponent extends Component {
        render() {
            return  <MyOtherComponent myAge="21" { ...this.props } />;
        }
    }

    return MyComponent;
}
