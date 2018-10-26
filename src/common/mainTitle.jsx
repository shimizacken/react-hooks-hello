import React, { Component } from 'react';

export default class MainTitle extends Component {

    render() {
    
        return (
            <h1>
                {this.props.text}
            </h1>
        );
    }
}